import { useMemo } from "react";
// import { Card } from "@src/components/Card/Card";
import { ActData, PlotData } from "./Data";
import { TextCard } from "@src/components/TextCard";
import { Progressbar } from "@src/components/Progressbar";

export const HomeList = () => {
  const PlotCardData = useMemo(() => PlotData, []);

  return (
    <div className=" text-black gradient mt-12">
      <div className="container flex justify-between mx-auto items-center px-4 lg:px-12">
        <div className="text-3xl font">Frontend Developer</div>
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
      <div className="container px-4 lg:px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left leading-9 ">
          <h1 className="lg:text-5xl  font-bold leading-tight text-3xl mb-3">
            새로움과 도전을 즐기는
            <br /> 개발자 이인국입니다
          </h1>

          <p className="leading-normal lg:text-xl text-md mb-1 ">2023년 01월 ~ 04월 코드스테이츠 프론트엔드과정 수료</p>
          <p className="leading-normal lg:text-xl text-md mb-8">
            2019년 06월 ~ 10월 SBS컴퓨터아트학원 웹퍼블리싱과정 이수
          </p>
        </div>
      </div>
      {/* Project */}
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl lg:px-12">About Me</h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center lg:px-12">
            <img
              className="object-cover rounded-full w-60 h-60 mx-auto shadow"
              src="https://user-images.githubusercontent.com/122377401/277350683-f8531782-9ae0-4be2-b7ba-8108a1bb4934.jpeg"
              alt=""
            />
            <div className="flex flex-col  lg:w-1/2">
              <div className="mt-6 lg:mt-0 lg:mx-6 ">
                <p className="text-xl text-blue-500 font-bold">Contact</p>
                <p className="block mt-4 text-lg font-normal text-gray-600 hover:underline">
                  <span className="font-bold ">Email. </span>
                  <a href="mailto:dlsrnr403@gmail.com">dlsrnr403@gmail.com</a>
                </p>
                <p className="block text-lg font-normal text-gray-600 mb-6 hover:underline ">
                  <span className="font-bold ">Phone. </span>
                  <a href="tel:01036964232">010-3696-4232</a>
                </p>
              </div>
              <div className="mt-6 lg:mt-0 lg:mx-6 ">
                <p className="text-xl text-blue-500 font-bold">Introduce</p>
                <p className="block mt-4 text-lg  font-normal text-gray-600 hover:underline">
                  웹 퍼블리싱과 프론트엔드 부트캠프 과정을 수료하면서 HTML과 CSS를 시멘틱하게 사용이 가능하며 리액트와
                  타입스크립트를 다루는 데 익숙합니다, 사람들과 함께 협업하며 성장하기위해 리액트와 타입스크립트를
                  이용한 프로젝트와 cs지식을 위한 스터디를 4개 진행한 경험이 있습니다.
                </p>
                <p className="block mt-4 text-lg  font-normal text-gray-600 hover:underline">
                  개발자가 되기 전에는 항공정비사와 모바일 인력소장으로 활동하며 다양한 경험을 쌓았습니다. 이런 경험들을
                  바탕으로 신뢰받는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Project</h1>
          <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          <div className="flex flex-col">
            {PlotCardData.map((item) => (
              <TextCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white border py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Extra Activities</h1>
          <div className="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
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
