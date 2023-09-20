"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import styles from "../../styles/search.module.css";
import { IconType } from "react-icons";
import { icon } from "leaflet";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  shadow?: boolean;
  errors: FieldErrors;
  hidden?: boolean;
  Icon?: string | StaticImport;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  shadow,
  hidden,
  errors,
  Icon,
}) => {
  return (
    <div className={`w-full relative ${hidden && `${styles.hidden}`}`}>
      {formatPrice && (
        <BiDollar
          size={24}
          className="
          text-neutral-700
          absolute
          top-5
          left-2
        "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          relative
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice && "pl-9"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
          ${shadow && `border-none ${styles.searchShadow}`}
          ${Icon ? "pl-14" : "pl-4"}
        `}
      />
      {Icon && (
        <Image
          src={Icon}
          alt=""
          width={29}
          height={29}
          className="
                            absolute
                            left-4
                            top-3
                        "
        />
      )}
      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        ${formatPrice && "left-9"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        ${Icon ? "left-14" : "left-4"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
