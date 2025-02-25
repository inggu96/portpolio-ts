import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";

export const TextCard = ({ data }: { data: IPlotData | IActData }): JSX.Element => {
  const defaultData = {
    plot: [],
    stack: [],
    gitLink: "",
    gitImage: "",
    pubLink: "",
    pubImage: "",
    figmaLink: "",
    figmaImage: "",
  };
  const { title, period, caption, ...optionalFields } = { ...defaultData, ...data };
  const [selectedStackItem, setSelectedStackItem] = useState<string | null>(optionalFields.stack[0]?.caption);

  return (
    <div className="flex flex-col p-6 w-full lg:flex-row">
      <div className="sm:w-full xl:w-1/4">
        <h3 className="mb-3 text-3xl font-bold leading-none text-black sm:w-full md:w-full lg:w-full xl:w-full">
          {title}
        </h3>
        <p className="mb-8 text-gray-600 sm:w-full sm:flex-nowrap">{period}</p>
        <div className="flex gap-4 sm:mb-5">
          {optionalFields.gitLink && optionalFields.gitImage && (
            <button>
              <a href={optionalFields.gitLink}>
                <IoLogoGithub className="rounded-lg shadow" size={60} />
              </a>
            </button>
          )}
          {optionalFields.pubLink && optionalFields.pubImage && (
            <button>
              <a href={optionalFields.pubLink}>
                <img className="rounded-lg shadow" src={optionalFields.pubImage} alt="icon" width="60" height="60" />
              </a>
            </button>
          )}
          {optionalFields.figmaLink && optionalFields.figmaImage && (
            <button>
              <a href={optionalFields.figmaLink}>
                <img className="rounded-lg shadow" src={optionalFields.figmaImage} alt="icon" width="60" height="60" />
              </a>
            </button>
          )}
        </div>
      </div>
      <div className="mx-2 w-full lg:w-3/4 sm:mt-5">
        <div>
          <p className="mt-5 border-gray-700 border-1">{caption}</p>
        </div>
        {optionalFields.plot?.map((item, key) => (
          <p key={key} className="mt-3 text-black sm:text-xs lg:text-2xl md:text-lg">
            ✔️ {item}
          </p>
        ))}
        <div className="flex-row mx-auto mt-4 max-w-2xl">
          {optionalFields.stack?.length > 0 && (
            <>
              <h2 className="py-2 my-1 text-2xl font-bold">Stack</h2>
              <div className="flex flex-row">
                {optionalFields.stack.map((item: IStackItem, key: number) => {
                  return (
                    <ul
                      key={key}
                      onClick={() => setSelectedStackItem(item.caption)}
                      className={`flex flex-wrap mb-4 -mb-px border-b border-gray-200`}
                    >
                      <li className="mr-2">
                        <div
                          className={`inline-block py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 cursor-pointer 
            ${
              item.caption === selectedStackItem
                ? "text-indigo-500 border-b-indigo-500"
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            }
         rounded-t-lg`}
                        >
                          {item.name}
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div className="p-4 rounded-lg shadow relativebg-gray-50">
                {selectedStackItem && <div>{selectedStackItem}</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
