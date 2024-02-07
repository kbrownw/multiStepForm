import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonDefault = ({
  children,
  onClick,
  style,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      className="px-5 py-3 bg-marine-blue font-bold text-white text-[18px] rounded-md"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
