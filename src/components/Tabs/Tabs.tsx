import { useState } from "react";

const TabContent = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  "First consultation content here...",
  "Opening hours content here...",
  "Referral information content here...",
  "Insurance coverage information content here...",
];

const TabTitles = [
  "How can I pay for my appointment?",
  "What can I expect at my first consultation?",
  "What are your opening hours?",
  "Do I need a referral?",
  "Is the cost of the appointment covered by private health insurance?",
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-3/4 mx-auto ">
      {TabTitles.map((title, index) => (
        <div className="border mt-1 shdow" key={index}>
          <button className="flex items-center focus:outline-none" onClick={() => setActiveTab(index)}>
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={activeTab === index ? "M20 12H4" : "M12 4v16m8-8H4"}
              />
            </svg>
            <h1 className="mx-4 text-xl text-black">{title}</h1>
          </button>

          <div
            style={{ maxHeight: activeTab === index ? "100vh" : "0", transition: "all .5s ease-in-out" }}
            className={`overflow-hidden ${activeTab === index ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex mt-8 md:mx-10">
              <span className="border border-blue-500"></span>
              <p className="max-w-3xl px-4 text-gray-dark:text-gray">{TabContent[index]}</p>
            </div>
          </div>

          {index !== TabTitles.length - 1 && <hr className="my-border-gray-dark:border-gray" />}
        </div>
      ))}
    </div>
  );
};
