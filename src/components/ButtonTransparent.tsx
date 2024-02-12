import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonTransparent = ({
  children,
  onClick,
  style,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      className="text-[18px] text-cool-gray font-bold transition duration-300 hover:text-marine-blue"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonTransparent;
