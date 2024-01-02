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
            <div className="w-full px-4 md:w-6/12">
              <img
                className="object-cover mx-auto rounded-full shadow w-60 h-60"
                src="https://user-images.githubusercontent.com/122377401/277350683-f8531782-9ae0-4be2-b7ba-8108a1bb4934.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <div className="mt-6 lg:mt-0 lg:mx-6 ">
                <p className="text-xl font-bold text-blue-500">Contact</p>
                <p className="block mt-4 text-lg font-normal text-gray-600 hover:underline">
                  <span className="font-bold ">Email. </span>
                  <a href="mailto:dlsrnr403@gmail.com">dlsrnr403@gmail.com</a>
                </p>
                <p className="block mb-6 text-lg font-normal text-gray-600 hover:underline ">
                  <span className="font-bold ">Phone. </span>
                  <a href="tel:01036964232">010-3696-4232</a>
                </p>
              </div>
              <div className="mt-6 lg:mt-0 lg:mx-6">
                <p className="text-xl font-bold text-blue-500">Introduce</p>
                <h1 className="mb-3 text-xl font-bold leading-tight lg:text-2xl">
                  새로움과 도전을 즐기는 개발자 이인국입니다
                </h1>
                <p className="block mt-4 text-lg font-normal text-gray-600">
                  <strong>안녕하세요. 팀원과의 협업과 규칙을 중시하는 프론트엔드 개발자 이인국입니다. </strong>
                  <br />
                  <br />
                  기술적인 문제 해결과 지속적인 학습에 열정을 가지고 있으며, 이를 실제프로젝트에 적용하는데 힘쓰고
                  있습니다 데이터와 UI 로직의 분리를 통해 가독성 높은 코드 작성을 지향하며, 이를 통해 팀의 효율성을
                  높이는 데 기여하기 위해 노력하고 있습니다.
                </p>
                <p className="block mt-4 text-lg font-normal text-gray-600">
                  최근 프로젝트에서는 최신
                  <strong>
                    Next.js의 앱 디렉터리 라우팅을 사용하였으며 <br />
                    버셀을 통한 CI/CD 배포 피그마 네이밍 규칙,커밋 컨벤션등 팀원과의 직관적인 소통
                  </strong>
                  을 위해 노력했습니다
                </p>
                <p className="block mt-4 font-normal text-gray-600 text-md">
                  교육기간 : 23.01 ~ 04 코드스테이츠 프론트엔드과정 수료
                  <br />
                  교육기간 : 19.06 ~ 10 SBS컴퓨터아트학원 웹퍼블리싱과정 이수
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
