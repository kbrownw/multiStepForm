import { useStepContext } from "../context/StepContext";
import ButtonDefault from "./ButtonDefault";
import ButtonPurple from "./ButtonPurple";
import ButtonTransparent from "./ButtonTransparent";

const FormFooter = () => {
  const { steps, setSelectedStep, selectedStep } = useStepContext();

  return (
    <div className="grid grid-cols-2 p-5 bg-white justify-between items-center self-end">
      <div className="">
        {selectedStep > 0 && (
          <ButtonTransparent onClick={() => setSelectedStep(selectedStep - 1)}>
            Go Back
          </ButtonTransparent>
        )}
      </div>
      <div className="justify-self-end">
        {selectedStep < steps.length - 1 && (
          <ButtonDefault onClick={() => setSelectedStep(selectedStep + 1)}>
            Next Step
          </ButtonDefault>
        )}
        {selectedStep + 1 === steps.length && (
          <ButtonPurple type="submit">Confirm</ButtonPurple>
        )}
      </div>
    </div>
  );
};

export default FormFooter;
