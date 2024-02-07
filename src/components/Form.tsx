import { useStepContext } from "../context/StepContext";
import FormPersonalInfo from "./FormPersonalInfo";

type Props = {};

const Form = (props: Props) => {
  const { selectedStep } = useStepContext();

  return (
    <div className="text-marine-blue my-5">
      {selectedStep === 0 && <FormPersonalInfo />}
    </div>
  );
};

export default Form;
