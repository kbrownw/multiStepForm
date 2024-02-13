import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonLink = ({ children, onClick, style, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className="flex text-[15px] text-cool-gray underline transition duration-300 hover:text-marine-blue"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
