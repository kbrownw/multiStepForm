import { CSSProperties } from "react";
import { useStepContext } from "../context/StepContext";

interface Props {
  registerKey: string;
  required?: boolean | string;
  maxLength?: number;
  pattern?: RegExp;
  patternMessage?: string;
  placeholder?: string;
  style?: CSSProperties;
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
  required = false,
  maxLength = 255,
  pattern,
  patternMessage,
  placeholder = "",
  type = "text",
  style,
}: Props) => {
  const { register } = useStepContext();

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerKey, {
          required: required,
          maxLength: maxLength,
          pattern: {
            value: pattern!,
            message: patternMessage!,
          },
        })}
        className="h-10 w-full px-5 text-marine-blue font-bold border border-light-gray rounded-lg
        placeholder:font-bold focus:border-marine-blue focus:outline-none md:h-14"
        style={style}
      />
    </>
  );
};

export default InputText;
