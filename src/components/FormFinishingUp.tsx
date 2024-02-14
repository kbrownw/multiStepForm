import { useStepContext } from "../context/StepContext";
import { useEffect, useState } from "react";
import FinishingUpAddons from "./FinishingUpAddons";
import FinishingUpPlan from "./FinishingUpPlan";
import { addOns, plans } from "../shared/data";

const FormFinishingUp = () => {
  const {
    isYearly,
    setSelectedStep,
    getValues,
    formState: { errors },
    setIsFinished,
  } = useStepContext();
  const selectedAddons = getValues("addons") as string[];
  const selectedPlan = getValues("plan") as string;
  const personalInfo = getValues(["name", "email", "phone"]);
  const [stepOneFinished, setStepOneFinished] = useState<boolean>(false);
  const [stepTwoFinisehd, setStepTwoFinished] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  const addCosts = () => {
    let currentCost = 0;
    if (selectedAddons.length > 0) {
      selectedAddons.forEach((addon) => {
        currentCost += addOns[addon].cost;
      });
    }
    if (selectedPlan != "") {
      currentCost += plans[selectedPlan].cost;
    }
    setTotalCost(currentCost);
  };

  useEffect(() => {
    for (let i = 0; i < personalInfo.length; i++) {
      if (personalInfo[i] === "") {
        setStepOneFinished(false);
        return;
      } else if (Object.keys(errors).length > 0) {
        setStepOneFinished(false);
        return;
      }
      setStepOneFinished(true);
    }
  }, [personalInfo]);

  useEffect(() => {
    if (selectedPlan === "") {
      setStepTwoFinished(false);
    } else {
      setStepTwoFinished(true);
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (stepOneFinished && stepTwoFinisehd) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
    addCosts();
  }, [stepOneFinished, stepTwoFinisehd]);

  return (
    <div className="flex flex-col">
      <div className="py-5 px-8 bg-magnolia rounded-md">
        {!stepOneFinished && (
          <h3 className="text-strawberry-red">
            Please finish Step 1 with valid information.
          </h3>
        )}
        {!stepTwoFinisehd ? (
          <h3 className="text-strawberry-red">
            Please choose a plan on step 2.
          </h3>
        ) : (
          <FinishingUpPlan
            setSelectedStep={setSelectedStep}
            isYearly={isYearly}
            selectedPlan={selectedPlan}
          />
        )}

        {selectedAddons.length > 0 && (
          <>
            <hr className="mx-auto my-5 border-b border-light-gray" />
            <div className="flex flex-col gap-y-4">
              <FinishingUpAddons
                selectedAddons={selectedAddons}
                isYearly={isYearly}
              />
            </div>
          </>
        )}
      </div>
      {stepOneFinished && stepTwoFinisehd && (
        <div className="flex py-5 px-8 justify-between items-center">
          <p className="text-cool-gray">
            Total {isYearly ? "(per year)" : "(per month)"}
          </p>
          <h2 className="text-purplish-blue text-[18px] font-[700] md:text-[22px]">
            ${isYearly ? `${totalCost * 10}/yr` : `${totalCost}/mo`}
          </h2>
        </div>
      )}
    </div>
  );
};

export default FormFinishingUp;
