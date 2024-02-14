import { CSSProperties, useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
}

const ButtonPurple = ({
  children,
  onClick,
  style,
  type = "button",
  isDisabled,
}: Props) => {
  const btnElement = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    if (btnElement) {
      if (isDisabled) {
        btnElement.current.disabled = true;
      } else {
        btnElement.current.disabled = false;
      }
    }
  }, [isDisabled]);

  return (
    <button
      ref={btnElement}
      type={type}
      className={`px-7 py-3 bg-purplish-blue font-bold text-white text-[18px] rounded-md transition duration-300
      hover:bg-marine-blue disabled:bg-light-gray disabled:text-cool-gray`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPurple;
