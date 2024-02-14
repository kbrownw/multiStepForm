import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  UseFormGetValues,
} from "react-hook-form";

export interface FormValues {
  [key: string]: string | string[];
}

export interface Step {
  step: string;
  title: string;
  largeTitle: string;
  info: string;
}

export interface StepContextType {
  selectedStep: number;
  setSelectedStep: (value: number) => void;
  steps: Step[];
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, FormValues>;
  formState: FormState<FormValues>;
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
  getValues: UseFormGetValues<FormValues>;
  isFinished: boolean;
  setIsFinished: (value: boolean) => void;
}

export interface AddOns {
  [key: string]: {
    name: string;
    cost: number;
  };
}

export interface Plans {
  [key: string]: {
    name: string;
    cost: number;
  };
}
