import { createContext, useContext, useState } from "react";
import { StepContextType, Step } from "../shared/types";

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Your info",
    largeTitle: "Personal Info",
    info: "Please provide your name, email, address, and phone number.",
  },
  {
    step: "Step 2",
    title: "Select Plan",
    largeTitle: "Select your plan",
    info: "You have the option of monthly or yearly billing.",
  },
  {
    step: "Step 3",
    title: "Add-ons",
    largeTitle: "Pick add-ons",
    info: "Add-ons help enhance your gaming experience.",
  },
  {
    step: "Step 4",
    title: "Summary",
    largeTitle: "Finishing up",
    info: "Double-check everything looks OK before confirming.",
  },
];

interface Props {
  children: React.ReactNode;
}

export const StepContext = createContext<StepContextType | undefined>(
  undefined
);

export const StepContextWrapper = ({ children }: Props) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <StepContext.Provider value={{ selectedStep, setSelectedStep, steps }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  const isStepContext = useContext(StepContext);

  if (!isStepContext) {
    throw new Error(
      "useStepContext must be used inside the StepContextWrapper element."
    );
  }

  return isStepContext;
};