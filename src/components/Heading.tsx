import { useStepContext } from "../context/StepContext";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Heading = () => {
  const { steps, selectedStep } = useStepContext();
  return (
    <div className="flex flex-col mt-2 gap-2 mb-10 md:mt-5">
      <Title>{steps[selectedStep].largeTitle}</Title>
      <Subtitle>{steps[selectedStep].info}</Subtitle>
    </div>
  );
};

export default Heading;
