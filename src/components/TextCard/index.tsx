interface Props {
  data: IPlotData;
}
export const TextCard = ({ data }: Props): JSX.Element => {
  const { title, type, period, caption, plot, stack, image } = data;

  return (
    <div className="w-full p-6 flex flex-col lg:flex-row">
      <div className="w-1/4">
        <h3 className="text-3xl text-black font-bold leading-none mb-3">{title}</h3>
        <p className="text-gray-600 mb-8">{period}</p>
      </div>
      <div className="w-3/4 mx-2 ">
        <div>
          <p className="">{caption}</p>
        </div>
        {plot.map((item, key) => {
          return (
            <p key={key} className="mt-3 text-2xl text-black md:text-lg">
              {item}
            </p>
          );
        })}
        <div className="mt-4 flex">
          {stack.map((item, key) => {
            return (
              <p key={key} className="text-sm text-gray-500 dark:text-gray-400 mr-4">
                {item}
              </p>
            );
          })}
        </div>
        <div className="mt-4 flex">{caption}</div>
      </div>
    </div>
  );
};
