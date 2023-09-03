interface props {
  text: string;
  variant?: string;
  onClick?: () => void;
}

export default function Link({ text, variant = "", onClick }: props) {
  return (
    <li className={variant} onClick={onClick}>
      {text}
    </li>
  );
}
