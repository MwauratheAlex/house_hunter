"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  whatsapp?: boolean;
  call?: boolean;
  small?: boolean;
  icon?: IconType;
  red?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  red,
  whatsapp,
  call,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ? "bg-white" : "bg-white"}
            ${outline ? "border-black" : "border-[#3a86ff]"}
            ${outline ? "text-black" : "text-black text-xl"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "py-1" : "py-3"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}
            ${red && "border-[#ff2222]"}
            ${call && "border-orange-400"}
            `}
    >
      {Icon && (
        <Icon
          size={24}
          fill={whatsapp ? "green" : ""}
          className="
                            absolute
                            left-4
                            top-3
                        "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
