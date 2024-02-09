import { useStepContext } from "../context/StepContext";
import FormPersonalInfo from "./FormPersonalInfo";
import FormPlanSelect from "./FormPlanSelect";

type Props = {};

const Form = (props: Props) => {
  const { selectedStep } = useStepContext();

  return (
    <div className="text-marine-blue my-5">
      {selectedStep === 0 && <FormPersonalInfo />}
      {selectedStep === 1 && <FormPlanSelect />}
    </div>
  );
};

export default Form;
