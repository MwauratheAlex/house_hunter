interface props {
  text: string;
  variant?: string;
  onClick?: () => void;
  ml?: boolean;
}

export default function Link({ text, variant = "", onClick, ml }: props) {
  console.log("ml");
  return (
    <li className={variant} onClick={onClick}>
      {text}
    </li>
  );
}
