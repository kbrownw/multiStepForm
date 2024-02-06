import { useForm } from "react-hook-form";

interface Props {
  registerKey: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
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
  placeholder = "",
  type = "text",
}: Props) => {
  const { register } = useForm();

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerKey, { required: required, maxLength: maxLength })}
        className="h-10 w-full px-5 text-marine-blue font-bold border border-light-gray rounded-lg
        placeholder:font-bold focus:border-marine-blue focus:outline-none md:h-14"
      />
    </>
  );
};

export default InputText;
