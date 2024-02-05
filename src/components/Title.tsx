import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Title = ({ children, style }: Props) => {
  return (
    <h1
      className="text-marine-blue font-extrabold text-[26px] md:text-[38px]"
      style={style}
    >
      {children}
    </h1>
  );
};

export default Title;
