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
        <div className="w-10/12 px-12 ml-auto mr-auto md:w-5/12 lg:w-4/12 md:px-4 ">
          <div className="relative flex flex-col w-full mb-6 rounded-lg shadow-lg">
            <img className="p-2 m-5" src="/ticketLogo.png" width={100} />
            <Slider {...settings}>
              <div>
                <img alt="Slide 1" src="/ticket/ticketMain.gif" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 1" src="/ticket/ticketLogin.gif" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 1" src="/ticket/ticketSearch.gif" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 1" src="/ticket/main.png" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 2" src="/ticket/search.png" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 3" src="/ticket/detail.png" className="w-full align-middle rounded-t-lg" />
              </div>
              <div>
                <img alt="Slide 3" src="/ticket/login.png" className="w-full align-middle rounded-t-lg" />
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
                <a href={LinkData[1].gitLink}>
                  <img src={LinkData[1].gitImage} alt="GitLink" className="border rounded-lg shadow" width={60} />
                </a>
              </div>
              <div className="relative flex flex-row gap-4 p-2">
                {LinkData[1].stack?.map((item) => (
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
                📝 팀 프로젝트 : 티켓벨
              </h2>
              <p className="mb-4 text-gray-600 sm:w-full sm:flex-nowrap">제작기간 :23.09.20. ~ 12.06</p>
              <p className="mb-4 text-xl text-gray-600 sm:w-full sm:flex-nowrap">
                Link :{" "}
                <a className="p-2 rounded-full shadow" href="https://ticker-bell-front.vercel.app/">
                  🔗
                </a>
              </p>
              <p className="mb-4 text-blueGray-500">
                <strong>티켓벨은 사용자 편의를 위한 공연 예매 서비스입니다. </strong>공연 등록자와 예매자를 위한 권한별
                회원 등록 기능을 제공하며, 공연 등록 및 예매가 가능합니다.
              </p>
              <p className="mb-4 text-blueGray-500">
                프로젝트는 프론트엔드 2명, 백엔드 2명으로 구성된 팀에서 진행되었습니다.
              </p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">
                ✔️ useMutation을 이용한 이벤트 등록 폼 구현
              </p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">✔️ 이벤트 등록내역 및 예약내역 구현</p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">
                ✔️ 디테일페이지 , 이벤트 등록내역 및 예약내역 구현
              </p>
              <p className="mb-4 text-blueGray-500 lg:text-2xl md:text-lg">
                ✔️ 잦은 렌더링 유발하던 메인페이지를 useQuery을 사용해 데이터캐싱구현
              </p>
              <p className="mb-4 text-blueGray-500">
                <strong>동료 프론트엔드 개발자와 함께 작업하며 </strong>
                <strong>버셀을 통한 CI/CD 배포 , next.js v13의 앱라우팅 방식</strong> 등 <br />
                axios를 사용해 데이터 통신 후 인스턴스처리 해주었고 useQuery를 사용해 캐싱작업으로 데이터패칭을
                진행했습니다 또한 , 동료 개발자의 소통 하에 코드 리뷰와 리팩토링을 진행했으며, 백엔드 개발자와의 협업을
                통해 효과적인 소통 방법을 배웠습니다.
              </p>
              <p className="mb-2 text-black lg:text-2xl md:text-lg">관련 포스팅</p>
              <a href="https://velog.io/@96_inggu/Portal-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-modal-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0">
                <p className="text-xs text-gray-500 lg:text-1xl md:text-md">🔗. Portal 사용해서 modal 구현하기</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
