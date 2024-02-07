import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface FormValues {
  [key: string]: string;
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
}
