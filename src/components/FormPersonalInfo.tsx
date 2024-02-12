import Label from "./Label";
import InputText from "./InputText";
import { useStepContext } from "../context/StepContext";
import { FieldError } from "react-hook-form";

const FormPersonalInfo = () => {
  const {
    formState: { errors, touchedFields },
  } = useStepContext();
  const errorStyle = (error: FieldError | undefined) => {
    if (error) {
      return { outline: "2px solid hsl(354, 84%, 57%)" };
    }
  };
  const emailErrorStyle = (error: FieldError | undefined) => {
    if (error && touchedFields.email) {
      return { outline: "2px solid hsl(354, 84%, 57%)" };
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex justify-between">
          <Label>Name</Label>
          <p className="text-strawberry-red">
            {errors?.name && errors.name.message}
          </p>
        </div>
        <InputText
          registerKey="name"
          placeholder="e.g. Stephen King"
          required="This field is required."
          style={errorStyle(errors?.name)}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <Label>Email Address</Label>
          <p className="text-strawberry-red">
            {errors?.email && touchedFields.email && errors.email.message}
          </p>
        </div>
        <InputText
          registerKey="email"
          placeholder="e.g. stephenking@lorem.com"
          required="This field is required."
          style={emailErrorStyle(errors?.email)}
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
          patternMessage="Please enter a valid email address."
        />
      </div>
      <div>
        <div className="flex justify-between">
          <Label>Phone Number</Label>
          <p className="text-strawberry-red">
            {errors?.phone && errors.phone.message}
          </p>
        </div>
        <InputText
          registerKey="phone"
          placeholder="e.g. +1 234 567 890"
          required="This field is required."
          style={errorStyle(errors?.phone)}
        />
      </div>
    </div>
  );
};

export default FormPersonalInfo;
