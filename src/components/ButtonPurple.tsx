import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonPurple = ({ children, onClick, style, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={`px-7 py-3 bg-purplish-blue font-bold text-white text-[18px] rounded-md transition duration-300 hover:bg-marine-blue`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPurple;
