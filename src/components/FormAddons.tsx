import CheckboxItem from "./CheckboxItem";

const FormAddons = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <CheckboxItem
          name="addons"
          value="online-service"
          title="Online service"
          description="Access to multiplayer games"
          cost={1}
        />
      </li>
      <li>
        <CheckboxItem
          name="addons"
          value="storage"
          title="Larger storage"
          description="Extra 1TB of cloud save"
          cost={2}
        />
      </li>
      <li>
        <CheckboxItem
          name="addons"
          value="custom"
          title="Customizable profile"
          description="Custom theme on your profile"
          cost={2}
        />
      </li>
    </ul>
  );
};

export default FormAddons;
