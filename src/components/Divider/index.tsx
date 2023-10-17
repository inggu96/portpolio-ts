interface Props {
  dividerOption: string;
}

export const Divider = ({ dividerOption }: Props) => {
  return (
    <>
      <div className="w-full text-7xl">
        {dividerOption}
        <span className="text-blue-500">.</span>
      </div>
      <hr className="px-5 h-3 border-blue-500 mx-4 md:my-10" style={{ height: "130px" }} />
    </>
  );
};
