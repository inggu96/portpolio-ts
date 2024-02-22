import { useMemo } from "react";
// import { Card } from "@src/components/Card/Card";
import { Progressbar } from "@src/components/Progressbar";
import { TextCard } from "@src/components/TextCard";
import { OnlyProject } from "./components/OnlyProject";
import { TicketProject } from "./components/TicketProject";
import { ActData, PlotData } from "./Data";

export const HomeList = () => {
  const PlotCardData = useMemo(() => PlotData, []);

  return (
    <div className="mt-12 overflow-x-hidden text-black gradient">
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-12">
        <div className="text-4xl font">Frontend Developer</div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <a href="https://github.com/inggu96">
              <img src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png" width={60} />
            </a>
            <a href="https://velog.io/@96_inggu">
              <img src="https://cdn.icon-icons.com/icons2/3915/PNG/512/velog_logo_icon_249278.png" width={40} />
            </a>
          </div>
        </div>
      </div>
      <Progressbar />
      {/* Project */}
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl lg:px-12">About Me</h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center lg:px-12">
            <div className="w-full px-4 md:w-1/3">
              <img
                className="object-cover w-40 h-40 mx-auto rounded-full shadow"
                src="https://user-images.githubusercontent.com/122377401/277350683-f8531782-9ae0-4be2-b7ba-8108a1bb4934.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:w-2/3">
              <div className="mt-6 lg:mt-0 lg:mx-6">
                <p className="mb-2 text-xl font-bold text-blue-500">Introduce</p>
                <h1 className="mb-3 text-xl font-bold leading-tight lg:text-2xl">
                  소통에서 답을 찾는 프론트엔드 개발자 이인국입니다.
                </h1>
                <p className="block mt-4 text-lg font-normal text-gray-600 sm:text-base sm:mt-2">
                  매 프로젝트마다 <strong>상황에 맞게 필요한 기술을 사용하기위해</strong> 노력하고있으며, 서버사이드의
                  중요성을 강조한 현 시장 트렌드를 파악하여 Next를 적극 사용했습니다.
                </p>
                <p className="block mt-4 text-lg font-normal text-gray-600 sm:text-base sm:mt-2">
                  <strong>SSR의 이점을 극대화</strong>하기 위한 <strong>SWR 사용</strong>과
                  <strong>헤더 쿠키를 사용해 보안 강화</strong>에 집중했으며, 이전 직무인 인력소장의 경험에서 배운
                  고객관점의 사고를 통해 <strong>사용자 관점에서의시각</strong> 에서 개발하려고 노력합니다.
                </p>
                <p className="block mt-4 text-lg font-normal text-gray-600 sm:text-base sm:mt-2">
                  <strong>소통을 어려워하는 팀원에게는</strong> 먼저 의견을 공유하는 방법으로 능동적인 팀워크를
                  구성하는데 기여했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Main Project</h1>
          <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-black rounded-t opacity-25"></div>
          <OnlyProject />
          <TicketProject />
        </div>
      </section>
      <section className="py-8 bg-white border">
        <div className="container max-w-5xl m-8 mx-auto">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Other Project</h1>
          <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-black rounded-t opacity-25"></div>
          <div className="flex flex-col">
            {PlotCardData.map((item) => (
              <TextCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 bg-white border">
        <div className="container max-w-5xl m-8 mx-auto">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Extra Activities</h1>
          <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-black rounded-t opacity-25"></div>
          <div className="flex flex-col">
            {ActData.map((item) => (
              <TextCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-6 mx-auto mb-12 text-center">
        <h1 className="w-full my-2 leading-tight text-center text-black text-md">
          Copyright 2023. Leeinguk all rights reserved.
        </h1>
      </section>
    </div>
  );
};
