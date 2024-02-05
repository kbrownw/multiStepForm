import { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
};

const CircleButton = ({ children, onClick, style }: Props) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="rounded-full border border-white border-solid py-1 px-3 font-bold"
    >
      {children}
    </button>
  );
};

export default CircleButton;
