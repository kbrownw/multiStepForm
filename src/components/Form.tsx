import React from "react";
import { useStepContext } from "../context/StepContext";
import FormPersonalInfo from "./FormPersonalInfo";
import { useForm } from "react-hook-form";

type Props = {};

const Form = (props: Props) => {
  const { selectedStep } = useStepContext();
  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="text-marine-blue my-5" onSubmit={onSubmit}>
      {selectedStep === 0 && <FormPersonalInfo />}
    </div>
  );
};

export default Form;
