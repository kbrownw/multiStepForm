import { motion } from "framer-motion";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  toggleState: boolean;
};

const Switch = ({ toggleState, onClick }: Props) => {
  const slideAnimation = toggleState ? { x: "23px" } : { x: "3px" };

  const handleToggle = (
    clickFunction: React.MouseEventHandler<HTMLButtonElement>,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    clickFunction(e);
  };

  return (
    <button
      type="button"
      onClick={(e) => handleToggle(onClick, e)}
      className="relative w-[50px] h-[26px] bg-marine-blue rounded-full"
    >
      <motion.div
        initial={slideAnimation}
        animate={slideAnimation}
        className="absolute w-[18px] h-[18px] bg-white rounded-full top-[4px] left-[3px]"
      ></motion.div>
    </button>
  );
};

export default Switch;
