import ButtonLink from "./ButtonLink";
import { plans } from "../shared/data";

interface Props {
  selectedPlan: string;
  setSelectedStep: (value: number) => void;
  isYearly: boolean;
}

const FinishingUpPlan = ({
  selectedPlan,
  setSelectedStep,
  isYearly,
}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h3 className="font-[500] md:text-[18px]">
          {plans[selectedPlan].name} {isYearly ? "(Yearly)" : "(Monthly)"}
        </h3>
        <ButtonLink onClick={() => setSelectedStep(1)}>Change</ButtonLink>
      </div>
      <h3 className="font-[500] md:text-[18px]">
        $
        {isYearly
          ? `${plans[selectedPlan].cost * 10}/yr`
          : `${plans[selectedPlan].cost}/mo`}
      </h3>
    </div>
  );
};

export default FinishingUpPlan;
