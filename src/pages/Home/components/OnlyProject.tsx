import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkData } from "@src/pages/Home/Data";
import { NextArrow, PrevArrow } from "./Arrow";

export const OnlyProject = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="container relative pt-16 mx-auto bg-blueGray-50">
      <div className="flex flex-wrap items-center">
        {/* 첫 번째 칼럼 */}
        <div className="w-10/12 px-12 ml-auto mr-auto md:w-5/12 lg:w-4/12 md:px-4 ">
          <div className="relative flex flex-col w-full mb-6 rounded-lg shadow-lg">
            <img className="p-2 m-5" src="/only/logo.png" width={40} />
            <Slider {...settings}>
              <div>
                <img
                  alt="Slide 1"
                  src="only/main.gif"
                  className="mx-auto align-middle rounded-t-lg "
                  width={180}
                  height={200}
                />
              </div>
              <div>
                <img
                  alt="Slide 1"
                  src="only/drawer.gif"
                  className="mx-auto align-middle rounded-t-lg "
                  width={180}
                  height={200}
                />
              </div>
              <div>
                <img
                  alt="Slide 1"
                  src="only/letter.gif"
                  className="mx-auto align-middle rounded-t-lg "
                  width={180}
                  height={200}
                />
              </div>
              <div>
                <img
                  alt="Slide 1"
                  src="only/modal.gif"
                  className="mx-auto align-middle rounded-t-lg "
                  width={180}
                  height={200}
                />
              </div>
            </Slider>
            {/* <img
                src="/ticket.png"
                alt="Logo"
                className="absolute left-0 m-4 bg-white bottom-20"
                width={90}
                height={40}
  /> */}
            <div className="flex flex-col">
              <div className="relative flex flex-row gap-4 p-2">
                {LinkData[0].stack?.map((item) => (
                  <div className="p-2 rounded-lg shadow" key={item}>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 두 번째 칼럼 */}
        <div className="w-full px-4 md:w-7/12">
          {/* 첫 번째 아이템 */}
          <div className="relative flex flex-col mt-4">
            <div className="flex-auto px-4 py-5">
              <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
                📝 임팩트 크래프트 : 온리유
              </h2>
              <p className="mb-4 text-gray-600 sm:w-full sm:flex-nowrap">제작기간 :23.12.06. ~ 진행중 (12.25기준)</p>
              <p className="mb-4 text-xl text-gray-600 sm:w-full sm:flex-nowrap">
                Link :{" "}
                <a className="p-2 rounded-full shadow" href={LinkData[0].pubLink}>
                  🔗
                </a>
              </p>
              <p className="mb-4 text-blueGray-500">
                온리유는 법인설립 예정이며 <strong>ai 매칭을 활용한 결혼정보회사입니다</strong>
                <br /> okky 커뮤니티에서 지원하여 구직기간 동안 참여했습니다
              </p>
              <p className="mb-4 text-blueGray-500">
                팀 구성인원은 기획자 1명, 풀스택 개발자 1명 ,프론트엔드 1명, 백엔드 1명 ,ai개발자 1명으로 구성된 팀에서
                진행되었습니다.
              </p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">✔️ 전체 웹앱 페이지 구성</p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">✔️ Mui 초기값 세팅 및 커스텀</p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">
                ✔️ Radio,Chip,Button을 사용한 폼 입력 구현
              </p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">✔️ 공통 Modal,Drawer Frame 구현</p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">✔️ 편지 쓰기 및 유효성 검사 구현</p>
              <p className="mb-4 text-blueGray-500">
                사용한 기술은 <strong>next v14와 앱라우팅 방식</strong>을 사용하였고 버셀로 자동 배포관리했습니다
                디자이너와 협업하여 <strong>피그마로 제작된 공통 Mui 라이브러리</strong>를 사용하여 색상 및 폰트,
                컴포넌트 구성단위까지 맞춰서 작업하였으며, 같은 네이밍을 사용하여 피그마로 확인하며 빠른 협업이
                가능하게끔 작업했습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
