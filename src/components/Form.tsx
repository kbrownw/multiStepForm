import { useStepContext } from "../context/StepContext";
import FormAddons from "./FormAddons";
import FormFinishingUp from "./FormFinishingUp";
import FormPersonalInfo from "./FormPersonalInfo";
import FormPlanSelect from "./FormPlanSelect";

const Form = () => {
  const { selectedStep } = useStepContext();

  return (
    <div className="text-marine-blue my-5">
      {selectedStep === 0 && <FormPersonalInfo />}
      {selectedStep === 1 && <FormPlanSelect />}
      {selectedStep === 2 && <FormAddons />}
      {selectedStep === 3 && <FormFinishingUp />}
    </div>
  );
};

export default Form;
