import Label from "./Label";
import InputText from "./InputText";
import { useForm } from "react-hook-form";

type Props = {};

const FormPersonalInfo = ({}: Props) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex">
          <Label>Name</Label>
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <InputText
          registerKey="name"
          placeholder="e.g. Stephen King"
          required={true}
        />
      </div>
      <div>
        <div className="flex">
          <Label>Email Address</Label>
        </div>
        <InputText
          registerKey="email"
          placeholder="e.g. stephenking@lorem.com"
          required={true}
          type="email"
        />
      </div>
    </div>
  );
};

export default FormPersonalInfo;
