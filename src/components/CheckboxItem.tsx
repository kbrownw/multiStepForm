import { useEffect, useRef, useState } from "react";
import { useStepContext } from "../context/StepContext";

interface Props {
  name: string;
  value: string;
  title: string;
  description: string;
  cost: number;
  options?: {
    [key: string]:
      | string
      | number
      | boolean
      | {
          value: string | number | boolean;
          message: string;
        };
  };
}

const CheckboxItem = ({
  name,
  value,
  title,
  description,
  cost,
  options,
}: Props) => {
  const { isYearly, register } = useStepContext();
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { ref, ...rest } = register(name, { ...options });
  const selectedStyle = isChecked ? "bg-magnolia border-marine-blue" : "";

  const handleClick = () => {
    if (checkbox.current) {
      if (checkbox.current.checked) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div
      className={`flex gap-5 items-center border border-light-gray rounded-md hover:border-marine-blue ${selectedStyle}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={value}
          value={value}
          onClick={handleClick}
          {...rest}
          ref={(e) => {
            ref(e);
            checkbox.current = e;
          }}
          className="peer appearance-none w-6 h-6 ml-5 border border-light-gray rounded-md text-purplish-blue checked:bg-purplish-blue
          hover:cursor-pointer
          "
        />
        <svg
          className="absolute ml-5 bottom-[10px] left-[4px] w-4 h-4 text-white hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <label
        htmlFor={value}
        className="flex w-full py-3 pr-5 justify-between items-center md:py-5 hover:cursor-pointer"
      >
        <div className="flex flex-col">
          <h3 className="font-[500] md:text-[20px]">{title}</h3>
          <p className="text-cool-gray text-[14px] md:text-[16px]">
            {description}
          </p>
        </div>
        <p className="text-purplish-blue text-[14px] md:text-[16px]">
          ${isYearly ? `${cost * 10}/yr` : `${cost}/mo`}
        </p>
      </label>
    </div>
  );
};

export default CheckboxItem;
