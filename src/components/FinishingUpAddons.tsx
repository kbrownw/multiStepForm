import { useEffect } from "react";
import { addOns } from "../shared/data";

interface Props {
  selectedAddons: string[];
  isYearly: boolean;
}

const FinishingUpAddons = ({ selectedAddons, isYearly }: Props) => {
  if (!selectedAddons || selectedAddons.length === 0) {
    return;
  }

  const addonsMap = selectedAddons.map((addon) => {
    return (
      <div key={addon} className="flex justify-between">
        <p className="text-cool-gray">{addOns[addon].name}</p>
        <p>
          +$
          {isYearly
            ? `${addOns[addon].cost * 10}/yr`
            : `${addOns[addon].cost}/mo`}
        </p>
      </div>
    );
  });

  return <>{addonsMap}</>;
};

export default FinishingUpAddons;
