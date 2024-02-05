import CircleButton from "./CircleButton";
import { useStepContext } from "../context/StepContext";

type Props = {
  isLargeScreen: boolean;
};

const Selector = ({ isLargeScreen }: Props) => {
  const { selectedStep, setSelectedStep, steps } = useStepContext();
  const handleClick = (index: number) => {
    setSelectedStep(index);
  };
  // const selectorBg = (isLargeScreen ? "bg")

  return (
    <>
      {steps.map((step, index) => (
        <div key={step.step} className="flex gap-5 items-center">
          <CircleButton
            style={
              selectedStep === index
                ? {
                    backgroundColor: "hsl(228, 100%, 84%)",
                    color: "hsl(213, 96%, 18%)",
                    borderColor: "hsl(228, 100%, 84%)",
                  }
                : undefined
            }
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </CircleButton>
          {isLargeScreen && (
            <div className="flex flex-col">
              <p className="text-light-gray text-[14px]">
                {step.step.toUpperCase()}
              </p>
              <p className="font-bold">{step.title.toUpperCase()}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Selector;
