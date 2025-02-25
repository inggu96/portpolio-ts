import { useMemo } from "react";
// import { Card } from "@src/components/Card/Card";
import { Progressbar } from "@/components/Progressbar";
import { TextCard } from "@/components/TextCard";

import { ActData, PlotData } from "../../../constants/About";
import { Analytics } from "@vercel/analytics/react";
import OnlyProject from "./sections/OnlyProject";
import TicketProject from "./sections/TicketProject";
import Profile from "./sections/Profile";
import { IoLogoGithub } from "react-icons/io";

import { SiVelog } from "react-icons/si";
const Portfolio2024 = () => {
  const PlotCardData = useMemo(() => PlotData, []);

  return (
    <>
      <Analytics />
      <div className="overflow-x-hidden mx-auto mt-12 max-w-screen-lg text-black gradient">
        <div className="container flex justify-between items-center px-4 mx-auto lg:px-12">
          <div className="text-4xl font">Frontend Developer</div>
          <div className="flex flex-row">
            <div className="flex flex-row gap-4 items-center">
              <a href="https://github.com/inggu96">
                <IoLogoGithub className="" size={40} />
              </a>
              <a href="https://velog.io/@96_inggu">
                <SiVelog className="rounded-lg shadow" size={40} />
              </a>
            </div>
          </div>
        </div>
        <Progressbar />
        {/* Project */}
        <section className="bg-white">
          <Profile />
        </section>
        <section>
          <div>
            <h1 className="my-2 w-full text-5xl font-bold leading-tight text-center text-gray-800">Main Project</h1>
            <div className="py-0 mx-auto my-0 w-1/6 h-1 bg-black rounded-t opacity-25"></div>
            <OnlyProject />
          </div>
          <div>
            <TicketProject />
          </div>
        </section>
        <section className="py-8 bg-white border">
          <div className="container m-8 mx-auto max-w-5xl">
            <h1 className="my-2 w-full text-5xl font-bold leading-tight text-center text-gray-800">Other Project</h1>
            <div className="py-0 mx-auto my-0 w-1/6 h-1 bg-black rounded-t opacity-25"></div>
            <div className="flex flex-col">
              {PlotCardData.map((item) => (
                <TextCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-8 bg-white border">
          <div className="container m-8 mx-auto max-w-5xl">
            <h1 className="my-2 w-full text-5xl font-bold leading-tight text-center text-gray-800">Extra Activities</h1>
            <div className="py-0 mx-auto my-0 w-1/6 h-1 bg-black rounded-t opacity-25"></div>
            <div className="flex flex-col">
              {ActData.map((item) => (
                <TextCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="container py-6 mx-auto mb-12 text-center">
          <h1 className="my-2 w-full leading-tight text-center text-black text-md">
            Copyright 2023. Leeinguk all rights reserved.
          </h1>
        </section>
      </div>
    </>
  );
};

export default Portfolio2024;
