interface Props {
  children: string;
  className: string;
}

const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Button;
