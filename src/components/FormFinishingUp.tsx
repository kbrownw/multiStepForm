import { useStepContext } from "../context/StepContext";
import { useEffect, useState } from "react";
import FinishingUpAddons from "./FinishingUpAddons";
import FinishingUpPlan from "./FinishingUpPlan";

const FormFinishingUp = () => {
  const {
    isYearly,
    setSelectedStep,
    getValues,
    formState: { errors },
  } = useStepContext();
  const selectedAddons = getValues("addons") as string[];
  const selectedPlan = getValues("plan") as string;
  const personalInfo = getValues(["name", "email", "phone"]);
  const [isNotFinished, setIsNotFinished] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < personalInfo.length; i++) {
      if (personalInfo[i] === "") {
        return setIsNotFinished(true);
      }
      setIsNotFinished(false);
    }
  }, [personalInfo]);

  //   console.log(errors["email"]);

  return (
    <div className="flex flex-col">
      <div className="py-5 px-8 bg-magnolia rounded-md">
        {isNotFinished && (
          <h3 className="text-strawberry-red">
            Please finish filling out your personal information.
          </h3>
        )}
        {selectedPlan === "" ? (
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
    </div>
  );
};

export default FormFinishingUp;
