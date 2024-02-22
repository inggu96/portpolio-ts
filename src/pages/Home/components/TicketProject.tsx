import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkData } from "@src/pages/Home/Data";
import { NextArrow, PrevArrow } from "./Arrow";
import Slider from "react-slick";

export const TicketProject = () => {
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
        <div className="w-full px-6 ml-auto mr-auto md:px-4 ">
          <div>
            <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-800 md:text-3xl">📝 팀 프로젝트 : 티켓벨</h2>
            <p className="w-full mb-4 text-gray-600 sm:flex-nowrap">제작기간 :23.09.20. ~ 12.06</p>
            <div className="flex flex-row gap-4">
              <p className="mb-4 text-xl text-gray-600 sm:flex-nowrap">Link :</p>
              <p className="h-10 p-2 rounded-full shadow">
                <a href={LinkData[1].pubLink}>🔗</a>
              </p>
              <p className="h-10 p-2 rounded-full shadow">
                <a href={LinkData[1].gitLink}>
                  <img src={LinkData[1].gitImage} alt="GitLink" width={30} />
                </a>
              </p>
            </div>
            <p className="mb-4 text-blueGray-500">6년차 프론트 엔드 개발자와 같이 작업을 해 프로젝트를 완성했습니다.</p>
            <p className="mb-4 text-blueGray-500">
              이번 프로젝트를 통해 <strong>개발자 간에 어떤 소통을 해야되는지 배웠으며,</strong> 개발자간의{" "}
              <strong>명확한 요구 사항과 자료구조 설계</strong>는 이후 온리유 프로젝트에서 백엔드 개발자와의{" "}
              <strong>매끄러운 협업을 하는데에 큰 도움</strong>이 되었습니다
            </p>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-blue-500 xl:text-lg">기술스택</p>
              <div className="relative flex flex-row gap-4 p-2">
                {LinkData[1].stack?.map((item) => (
                  <div className="p-2 rounded-lg shadow" key={item}>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full mb-6 rounded-lg shadow-lg">
            <img className="p-2 m-5" src="/ticketLogo.png" width={100} />
            <Slider {...settings}>
              <div>
                <img alt="Slide 1" src="/ticket/ticketMain.gif" className="w-full align-middle rounded-t-lg" />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">전체 페이지 구현(카테고리 캐러셀)</p>
              </div>
              <div>
                <img alt="Slide 1" src="/ticket/ticketLogin.gif" className="w-full align-middle rounded-t-lg" />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">로그인 페이지 재구성(토큰발행)</p>
              </div>
              <div>
                <img alt="Slide 1" src="/ticket/ticketSearch.gif" className="w-full align-middle rounded-t-lg" />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">검색 페이지 구현(graphQL 키워드 검색)</p>
              </div>
              <div>
                <img alt="Slide 3" src="/ticket/detail.png" className="w-full align-middle rounded-t-lg" />
                <p className="p-2 m-3 text-lg text-center xl:text-sm">디테일 페이지 구현(공연 결제 테스트 구현)</p>
              </div>
            </Slider>
            <div className="flex flex-col">
              <div className="relative flex flex-row gap-4 p-2">
                <a href={LinkData[1].gitLink}></a>
              </div>
              <div className="relative flex flex-row gap-4 p-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
