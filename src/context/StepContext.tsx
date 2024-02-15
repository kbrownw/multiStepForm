import { createContext, useContext, useState } from "react";
import { StepContextType, Step, FormValues } from "../shared/types";
import { useForm } from "react-hook-form";

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
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [phoneValid, setPhoneValid] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm<FormValues>({
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
      addons: [],
    },
  });

  return (
    <StepContext.Provider
      value={{
        selectedStep,
        setSelectedStep,
        steps,
        register,
        handleSubmit,
        formState,
        isYearly,
        setIsYearly,
        getValues,
        isFinished,
        setIsFinished,
        setError,
        clearErrors,
        phoneValid,
        setPhoneValid,
      }}
    >
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
