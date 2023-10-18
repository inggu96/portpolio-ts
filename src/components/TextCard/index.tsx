import { useState } from "react";

interface Props {
  data: IPlotData;
}
export const TextCard = ({ data }: Props): JSX.Element => {
  const { title, type, gitLink, gitImage, period, caption, plot, stack, image } = data;

  const [selectedStackItem, setSelectedStackItem] = useState<string | null>(stack[0]?.caption);

  return (
    <div className="w-full p-6 flex flex-col lg:flex-row">
      <div className="w-1/4">
        <h3 className="text-3xl text-black font-bold leading-none mb-3">{title}</h3>
        <p className="text-gray-600 mb-8">{period}</p>
        <button>
          <a href={gitLink}>
            <img className="shadow rounded-lg" src={gitImage} alt="icon" width="60" height="60" />
          </a>
        </button>
      </div>
      <div className="w-3/4 mx-2 ">
        <div>
          <p className="">{caption}</p>
        </div>
        {plot.map((item, key) => {
          return (
            <p key={key} className="mt-3 text-2xl text-black md:text-lg">
              ✔️ {item}
            </p>
          );
        })}

        <div className="mt-4 flex">
          {stack.map((item, key) => {
            return (
              <div
                key={key}
                onClick={() => setSelectedStackItem(item.caption)}
                className={`text-sm py-2 px-6 bg-white border shadow cursor-pointer duration-200 ${
                  selectedStackItem === item.caption ? "bg-black text-white" : "bg-white text-black"
                } hover:bg-black hover:text-white`}
              >
                <p className="">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="py-5 px-5 flex border shadow rounded-lg duration-200 ">
          {selectedStackItem && <div>{selectedStackItem}</div>}
        </div>
      </div>
    </div>
  );
};
