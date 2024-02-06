import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Label = ({ children, style }: Props) => {
  return (
    <label style={style} className="text-[13px] md:text-[16px]">
      {children}
    </label>
  );
};

export default Label;
