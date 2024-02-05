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
}
