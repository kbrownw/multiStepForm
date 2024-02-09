import { useStepContext } from "../context/StepContext";

type Props = {
  value: string;
  name: string;
  title: string;
  cost: number;
  image: string;
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
};

const RadioItem = ({ value, name, options, title, cost, image }: Props) => {
  const { register, isYearly } = useStepContext();

  return (
    <>
      <input
        type="radio"
        id={value}
        value={value}
        {...register(name, { ...options })}
        className="hidden peer"
      />
      <label
        htmlFor={value}
        className="flex gap-4 p-5 border border-light-gray rounded-md cursor-pointer peer-checked:bg-magnolia peer-checked:border-marine-blue
        md:flex-col md:basis-1/2 hover:border-marine-blue transition duration-300"
      >
        <div className="mt-1 md:mb-10">
          <img src={image} alt={`${value}-icon`} />
        </div>
        <div>
          <h3 className="text-[18px] font-[500] md:text-[20px]">{title}</h3>
          <p className="text-cool-gray text-[14px] md:text-[16px]">
            ${isYearly ? `${cost * 10}/yr` : `${cost}/mo`}
          </p>
          {isYearly && (
            <p className="text-[12px] md:text-[14px]">2 months free</p>
          )}
        </div>
      </label>
    </>
  );
};

export default RadioItem;
