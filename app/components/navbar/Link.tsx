interface props {
  text: string;
}

export default function Link({ text }: props) {
  return <a href="#">{text}</a>;
}
