interface props {
  text: string;
  variant?: string;
}

export default function Link({ text, variant = "" }: props) {
  return (
    <li className={variant}>
      <a href="#">{text}</a>
    </li>
  );
}
