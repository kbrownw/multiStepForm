import Selector from "./Selector";

interface Props {
  isLargeScreen: boolean;
}

const Sidebar = ({ isLargeScreen }: Props) => {
  return (
    <div
      className="flex py-10 text-white gap-5 justify-center rounded-lg md:flex-col md:bg-desktop-sidebar
      md:h-full md:bg-cover md:p-8 md:justify-start"
    >
      <Selector isLargeScreen={isLargeScreen} />
    </div>
  );
};

export default Sidebar;
