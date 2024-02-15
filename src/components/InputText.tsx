import { CSSProperties } from "react";
import { useStepContext } from "../context/StepContext";

interface Props {
  registerKey: string;
  placeholder?: string;
  style?: CSSProperties;
  handleBlur?: React.FocusEventHandler<HTMLInputElement> | void | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | void | undefined;
  options?: {
    [key: string]:
      | string
      | number
      | boolean
      | {
          value: string | number | boolean | RegExp;
          message: string;
        };
  };
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "email"
    | "hidden"
    | "password"
    | "tel"
    | "text"
    | "time";
}

const InputText = ({
  registerKey,
  placeholder = "",
  type = "text",
  options,
  style,
  handleBlur,
  handleChange,
}: Props) => {
  const { register } = useStepContext();
  const { onBlur, onChange, ...rest } = register(registerKey, { ...options });

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        onBlur={(e) => {
          onBlur(e);
          handleBlur;
        }}
        onChange={(e) => {
          if (handleChange) {
            handleChange(e);
          }
          onChange(e);
        }}
        className="h-10 w-full px-5 text-marine-blue font-bold border border-light-gray rounded-lg
        placeholder:font-bold focus:border-marine-blue focus:outline-none md:h-14"
        style={style}
      />
    </>
  );
};

export default InputText;
