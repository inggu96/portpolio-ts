import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkData } from "@/constants/About";
import { NextArrow, PrevArrow } from "@/components/Arrow";

const OnlyProject = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="container relative pt-16 mx-auto bg-blueGray-50">
      <div className="flex flex-wrap items-center">
        {/* 첫 번째 칼럼 */}
        <div className="flex-auto px-6 py-2 mr-auto ml-auto w-full md:px-4">
          <div>
            <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
              📝 임팩트 크래프트 : 온리유
            </h2>
            <p className="mb-4 w-full text-gray-600 sm:flex-nowrap">제작기간 :23.12.06. ~ 24.02.02</p>
            <div className="flex flex-row gap-4">
              <p className="mb-4 text-xl text-gray-600 sm:flex-nowrap">Link : </p>
              <a className="p-2 h-10 rounded-full shadow" href={LinkData[0].pubLink}>
                🔗
              </a>
            </div>
            <p className="mb-4 text-blueGray-500">
              <strong>온리유는 기존에 서비스 중이던 AI 매칭 소개팅 웹앱</strong>으로 프론트엔드 개발자로 리뉴얼 작업에
              참여해 MVP 제작을 완료했습니다.{" "}
            </p>
            <p className="mb-4 text-blueGray-500">
              사용자의 <strong>개인정보 보호</strong>를 위해 SSR에 용이한 Next.js를 선택했으며, 실제 사용자 경험 개선을
              목표로
              <strong>4번의 디자인 QA</strong>를 진행하는 등의 노력을 기울였습니다.
            </p>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-blue-500 xl:text-lg">기술스택</p>
              <div className="flex relative flex-row gap-4 p-2">
                {LinkData[0].stack?.map((item) => (
                  <div className="p-2 rounded-lg shadow" key={item}>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex relative flex-col pt-2 mt-2 mb-6 w-full shadow-lg ounded-lg">
            <p className="px-6 mb-5 text-xl font-bold text-blue-500 xl:text-lg">시연화면</p>
            <Slider {...settings}>
              <div>
                <img
                  alt="Slide 1"
                  src="/only/main.gif"
                  className="flex items-center mx-auto align-middle rounded-t-lg"
                  width={180}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">
                  전체 페이지 구현 (MUI 오버라이딩 , 토큰관리 및 SSR 데이터패칭 등)
                </p>
              </div>

              <div className="flex justify-center items-center h-full">
                <img
                  alt="Slide 1"
                  src="/only/login.gif"
                  className="mx-auto align-middle rounded-t-lg"
                  width={180}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">
                  로그인 페이지 구현 및 기능 구현 (휴대폰 인증 시 토큰발행)
                </p>
              </div>
              <div>
                <img
                  alt="Slide 1"
                  src="/only/letter.gif"
                  className="mx-auto align-middle rounded-t-lg"
                  width={180}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">리덕스를 사용해 조건 전역상태관리</p>
              </div>
              <div>
                <img
                  alt="Slide 1"
                  src="/only/modal.gif"
                  className="mx-auto align-middle rounded-t-lg"
                  width={180}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">각 화면별 모달구성</p>
              </div>
            </Slider>
          </div>
          <div className="flex relative flex-col pt-2 mt-2 mb-6 w-full shadow-lg ounded-lg">
            <p className="px-6 mb-5 text-xl font-bold text-blue-500 xl:text-lg">화면 플로우 및 아키텍쳐</p>
            <Slider {...settings}>
              <div>
                <img
                  alt="Slide 1"
                  src="/only/onlyou-flow.png"
                  className="flex items-center mx-auto align-middle rounded-t-lg"
                  width={500}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">피그마로 구현한 온리유 전체 화면 플로우</p>
              </div>

              <div className="flex justify-center items-center h-full">
                <img
                  alt="Slide 1"
                  src="/only/architecture.png"
                  className="mx-auto align-middle rounded-t-lg"
                  width={500}
                  height={200}
                />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">배포 환경 및 구조</p>
              </div>
            </Slider>
          </div>
          <div className="flex relative flex-col pt-2 mt-2 mb-6 w-full shadow-lg ounded-lg">
            <p className="px-6 mb-5 text-xl font-bold text-blue-500 xl:text-lg">성과데이터</p>
            <Slider {...settings}>
              <div>
                <img
                  alt="Slide 1"
                  src="/only/chart1.png"
                  className="flex items-center mx-auto align-middle rounded-t-lg"
                  width={500}
                  height={200}
                />
                <p className="p-1 m-2 text-lg text-center xl:text-sm">
                  항목별 편지추가 , 직관적 UI와 UX를 개선해 7.1%였던 성사율을 14.6%로 이전대비 2배 상승시키는데
                  기여했습니다
                </p>
                <p className="p-1 m-3 text-lg text-center xl:text-sm">총 매칭수 7076회 → 성사수 509회</p>
              </div>

              <div className="flex justify-center items-center h-full">
                <img
                  alt="Slide 1"
                  src="/only/chart2.png"
                  className="mx-auto align-middle rounded-t-lg"
                  width={500}
                  height={200}
                />
                <p className="p-1 m-2 text-lg text-center xl:text-sm">
                  항목별 편지추가 , 직관적 UI와 UX를 개선해 7.1%였던 성사율을 14.6%로 이전대비 2배 상승시키는데
                  기여했습니다
                </p>
                <p className="p-1 m-3 text-lg text-center xl:text-sm">총 매칭수 7076회 → 성사수 509회</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyProject;
