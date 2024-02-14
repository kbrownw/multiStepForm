interface Props {
  children: React.ReactNode;
}

const PTextError = ({ children }: Props) => {
  return (
    <p className="text-strawberry-red text-[14px] md:text-[16px]">{children}</p>
  );
};

export default PTextError;
