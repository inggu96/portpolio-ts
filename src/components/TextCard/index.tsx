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
      <div className="w-full lg:w-3/4 mx-2 ">
        <div>
          <p className="">{caption}</p>
        </div>
        {optionalFields.plot?.map((item, key) => (
          <p key={key} className="mt-3 sm:text-xs lg:text-2xl text-black md:text-lg">
            ✔️ {item}
          </p>
        ))}
        <div className="mt-4 max-w-2xl mx-auto  flex-row">
          {optionalFields.stack?.length > 0 && (
            <>
              <h2 className="my-1 py-2 text-2xl font-bold">사용한 기술들</h2>
              <div className="flex flex-row">
                {optionalFields.stack.map((item: IStackItem, key: number) => {
                  return (
                    <ul
                      key={key}
                      onClick={() => setSelectedStackItem(item.caption)}
                      className={`flex flex-wrap -mb-px  border-b border-gray-200 dark:border-gray-700 mb-4`}
                    >
                      <li className="mr-2">
                        <button
                          className={`inline-block py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 
            ${
              item.caption === selectedStackItem
                ? "text-indigo-500 border-indigo-500"
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            }
            dark:text-gray-400 dark:hover:text-gray-300 rounded-t-lg`}
                        >
                          {item.name}
                        </button>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div className="relativebg-gray-50 p-4 rounded-lg dark:bg-gray-800 shadow ">
                {selectedStackItem && <div>{selectedStackItem}</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
