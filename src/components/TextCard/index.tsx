import { useState } from "react";

export const TextCard = ({ data }: { data: IPlotData | IActData }): JSX.Element => {
  const defaultData = {
    plot: [],
    stack: [],
    gitLink: "",
    gitImage: "",
    pubLink: "",
    pubImage: "",
  };
  const { title, period, caption, ...optionalFields } = { ...defaultData, ...data };
  const [selectedStackItem, setSelectedStackItem] = useState<string | null>(optionalFields.stack[0]?.caption);

  return (
    <div className="w-full p-6 flex flex-col lg:flex-row">
      <div className="sm:w-full xl:w-1/4">
        <h3 className="text-3xl text-black font-bold leading-none mb-3 sm:w-full md:w-full lg:w-full xl:w-full">
          {title}
        </h3>
        <p className="text-gray-600 mb-8 sm:w-full sm:flex-nowrap">{period}</p>
        <div className="flex gap-4">
          {optionalFields.gitLink && optionalFields.gitImage && (
            <button>
              <a href={optionalFields.gitLink}>
                <img className="shadow rounded-lg" src={optionalFields.gitImage} alt="icon" width="60" height="60" />
              </a>
            </button>
          )}
          {optionalFields.pubLink && optionalFields.pubImage && (
            <button>
              <a href={optionalFields.pubLink}>
                <img className="shadow rounded-lg" src={optionalFields.pubImage} alt="icon" width="60" height="60" />
              </a>
            </button>
          )}
        </div>
      </div>
      <div className="w-3/4 mx-2 ">
        <div>
          <p className="">{caption}</p>
        </div>
        {optionalFields.plot?.map((item, key) => (
          <p key={key} className="mt-3 sm:text-xs lg:text-2xl text-black md:text-lg">
            ✔️ {item}
          </p>
        ))}
        <div className="mt-4 flex flex-col w-full sm:w-auto ">
          {optionalFields.stack?.length > 0 && (
            <>
              <h2 className="my-1 py-2 text-2xl font-bold">사용한 기술들</h2>
              <div className="mt-4 flex w-full">
                {optionalFields.stack.map((item: IStackItem, key: number) => {
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

              <div className="relative bg-white shadow-lg p-6 border border-indigo-300 rounded-lg md:w-full transition-all duration-500 ease-in-out ">
                {selectedStackItem && <div>{selectedStackItem}</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
