import { useMemo } from "react";
// import { Card } from "@src/components/Card/Card";
import { ActData, PlotData } from "./Data";
import { TextCard } from "@src/components/TextCard";
import { Progressbar } from "@src/components/Progressbar";

export const HomeList = () => {
  // <div>
  //   <div className="my-5 ticky top-0 flex h-screen flex-col">
  //     <Divider dividerOption="Work" />
  //     <Banner setShowModal={setShowModal} />
  //   </div>
  //   <div className="sticky top-0 flex h-screen flex-col bg-gray-100">
  //     {PlotCardData.map((item) => (
  //       <TextCard key={item.id} data={item} />
  //     ))}
  //   </div>

  //   {/* <div className="gap-2 grid grid-cols-3">
  //   {ProjectCardData.map((item) => (
  //     <Card key={item.id} data={item} />
  //   ))}
  // </div> */}
  //   {showModal && <Modal setShowModal={setShowModal} />}
  // </div>
  // const ProjectCardData = useMemo(() => ProjectData, []);
  const PlotCardData = useMemo(() => PlotData, []);

  return (
    // 기본width 제한 <div className="container my-6 mx-auto px-6 md:px-12 xl:px-32">
    //
    <div className=" text-black gradient mt-12">
      <div className="container flex justify-between mx-auto items-center px-12">
        <div className="text-3xl font">Frontend Developer</div>
        <div className="flex flex-row">
          <div>
            <a href="https://github.com/inggu96">
              <img src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png" width={60} />
            </a>
          </div>
        </div>
      </div>
      <Progressbar />
      <div className="container px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 sm:text-2xl lg:text-5xl font-bold leading-tight wrap-now">
            새로움과 개발하는 것을 즐기는 이인국입니다
          </h1>
          <div>
            <p className="leading-normal text-xl">2023년 01월 ~ 04월 코드스테이츠 프론트엔드과정 수료</p>
            <p className="leading-normal text-xl mb-8">2019년 06월 ~ 10월 SBS컴퓨터아트학원 웹퍼블리싱 이수</p>
          </div>
        </div>
      </div>
      {/* Project */}
      <section className="bg-white border py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Project</h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col">
            {PlotCardData.map((item) => (
              <TextCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white border py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Project</h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col">
            {ActData.map((item) => (
              <TextCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-md  leading-tight text-center text-black">
          Copyright 2023. Leeinguk all rights reserved.
        </h1>
      </section>
    </div>
  );
};
