import { useMemo, useState } from "react";
// import { Card } from "@src/components/Card/Card";
import { PlotData } from "./Data";
import { Modal } from "@src/components/Modal/Modal";
import { Banner } from "./Banner";
import { TextCard } from "@src/components/TextCard";
import { Progressbar } from "@src/components/Progressbar";
import { Divider } from "@src/components/Divider";
import { Tabs } from "@src/components/Tabs/Tabs";
import { Tab } from "@src/components/Tab/Tab";

export const HomeList = () => {
  // <Progressbar />
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
  const [showModal, setShowModal] = useState(false);

  return (
    // 기본width 제한 <div className="container my-6 mx-auto px-6 md:px-12 xl:px-32">
    //
    <div className=" text-black gradient mt-12">
      <Progressbar />
      <div className="container px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            소통하며 개발하는 것을 즐기는 프론트엔드 개발자입니다
          </h1>
          <p className="leading-normal text-2xl mb-8"></p>
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
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Skils</h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <Tabs />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">기타경력</h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black">끝으로</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight text-black"></h3>
      </section>
    </div>
  );
};
