import Label from "./Label";
import InputText from "./InputText";
import { useStepContext } from "../context/StepContext";
import { FieldError } from "react-hook-form";
import PTextError from "./PTextError";
import { useEffect } from "react";
import { parsePhoneNumber } from "awesome-phonenumber";
import { useCountryCodeLookup } from "../hooks/useCountryCodeLookup";

const FormPersonalInfo = () => {
  const {
    formState: { errors, touchedFields },
    setError,
    clearErrors,
    setPhoneValid,
    phoneValid,
  } = useStepContext();
  const { countryCode, countryCodeLookup } = useCountryCodeLookup();
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
  const phoneValidation = (pn: string) => {
    let phoneNumber = parsePhoneNumber(pn, { regionCode: countryCode });
    if (phoneNumber.valid) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  useEffect(() => {
    // Lookup users country code based on IP address when loaded
    countryCodeLookup();
  }, []);

  useEffect(() => {
    // Set error while phone number is invale
    if (!phoneValid) {
      setError("customPhone", {
        type: "custom",
        message: "Entered number is not valid.",
      });
    } else {
      clearErrors("customPhone");
    }
  }, [phoneValid]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex justify-between">
          <Label>Name</Label>
          <PTextError>
            {errors?.name?.types?.required && errors.name.message}
          </PTextError>
        </div>
        <InputText
          registerKey="name"
          placeholder="e.g. Stephen King"
          options={{ required: "This field is required." }}
          style={errorStyle(errors?.name)}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <Label>Email Address</Label>
          <PTextError>
            {errors?.email && touchedFields.email && errors.email.message}
          </PTextError>
        </div>
        <InputText
          registerKey="email"
          placeholder="e.g. stephenking@lorem.com"
          options={{
            required: "This field is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address.",
            },
          }}
          style={emailErrorStyle(errors?.email)}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <Label>Phone Number</Label>
          <PTextError>
            {errors?.phone?.types?.required && errors.phone.message}
            {errors?.customPhone && !errors.phone && errors.customPhone.message}
          </PTextError>
        </div>
        <InputText
          registerKey="phone"
          placeholder="e.g. +1 234 567 890"
          handleChange={(e) => phoneValidation(e.target.value)}
          options={{
            required: "This field is required.",
          }}
          style={errorStyle(errors?.phone)}
        />
      </div>
    </div>
  );
};

export default FormPersonalInfo;
