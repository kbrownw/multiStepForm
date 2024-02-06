import { useStepContext } from "../context/StepContext";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Heading = () => {
  const { steps, selectedStep } = useStepContext();
  return (
    <div className="flex flex-col gap-2 mb-10">
      <Title>{steps[selectedStep].largeTitle}</Title>
      <Subtitle>{steps[selectedStep].info}</Subtitle>
    </div>
  );
};

export default Heading;
