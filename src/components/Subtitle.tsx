import React from "react";

interface Props {
  children: React.ReactNode;
}

const Subtitle = ({ children }: Props) => {
  return <h3 className="text-cool-gray text-[18px]">{children}</h3>;
};

export default Subtitle;
