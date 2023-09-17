interface props {
  text: string;
  variant?: string;
  onClick?: () => void;
  ml?: boolean;
  active?: string;
}

export default function Link({
  text,
  variant = "",
  onClick,
  ml,
  active = "",
}: props) {
  // console.log("ml");
  return (
    <li className={`${variant} ${active}`} onClick={onClick}>
      {text}
    </li>
  );
}
