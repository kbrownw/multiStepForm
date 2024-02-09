import { useStepContext } from "../context/StepContext";
import RadioItem from "./RadioItem";
import Switch from "./Switch";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

const FormPlanSelect = () => {
  const { isYearly, setIsYearly } = useStepContext();
  const monthlyText = isYearly ? "text-cool-gray" : "text-marine-blue";
  const yearlyText = !isYearly ? "text-cool-gray" : "text-marine-blue";

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-col gap-5 md:flex-row md:justify-stretch">
        <li className="w-full">
          <RadioItem
            name="plan"
            value="arcade"
            options={{ required: true }}
            title="Arcade"
            cost={9}
            image={Arcade}
          />
        </li>
        <li className="w-full">
          <RadioItem
            name="plan"
            value="advanced"
            title="Advanced"
            cost={12}
            image={Advanced}
          />
        </li>
        <li className="w-full">
          <RadioItem
            name="plan"
            value="pro"
            title="Pro"
            cost={15}
            image={Pro}
          />
        </li>
      </ul>
      <div className="flex py-4 gap-5 justify-center bg-magnolia rounded-md ">
        <p className={monthlyText}>Monthly</p>
        <Switch onClick={handleToggle} toggleState={isYearly} />
        <p className={yearlyText}>Yearly</p>
      </div>
    </div>
  );
};

export default FormPlanSelect;
