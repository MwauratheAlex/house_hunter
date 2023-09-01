interface props {
  text: string;
  variant?: string;
}

export default async function Link({ text, variant = "" }: props) {
  return (
    <li className={variant}>
      <a href="#">{text}</a>
    </li>
  );
}
