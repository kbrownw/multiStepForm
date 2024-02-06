import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const ButtonTransparent = ({ children, onClick, style }: Props) => {
  return (
    <button
      className="text-[18px] text-cool-gray font-bold"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonTransparent;
