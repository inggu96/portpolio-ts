export const LinkData: ILinkData[] = [
  {
    id: 1,
    stack: ["Next", "Typescript", "redux-toolkit", "Mui"],
    pubLink: "https://onlyou-v2-front.vercel.app/matching",
    pubImage: "only/logo.png",
    figmaLink: "",
    figmaImage: "",
  },
  {
    id: 2,
    stack: ["Next", "Typescript", "Recoil", "tailwind"],
    gitLink: "https://github.com/inggu96/tickerBell-front",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "https://ticker-bell-front.vercel.app/",
    pubImage:
      "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry-thumbnail.png",
    figmaLink: "",
    figmaImage: "",
  },
  {
    id: 3,
    stack: ["React", "Typescript", "Justand", "React-Table"],
    gitLink: "https://github.com/inggu96/curing",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "https://ticker-bell-front.vercel.app/",
    pubImage: "",
    figmaLink: "",
    figmaImage: "",
  },
  {
    id: 4,
    stack: ["React", "JavaScript", "Redux", "React-Table"],
    gitLink: "https://github.com/inggu96/Weply",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "http://weply.s3-website.ap-northeast-2.amazonaws.com/",
    pubImage: "https://user-images.githubusercontent.com/122377401/255330812-33626ba9-ca9e-4071-8ce4-9031770b22ea.png",
    figmaLink: "",
    figmaImage: "",
  },
  {
    id: 5,
    stack: ["React", "JavaScript", "Scss", "framer-motion"],
    gitLink: "https://github.com/inggu96/select_movie",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "http://test-imagine.s3-website.ap-northeast-2.amazonaws.com/",
    pubImage: "https://user-images.githubusercontent.com/122377401/259013017-1935dea4-2631-4279-b79b-e8cc69eb6e20.jpeg",
    figmaLink:
      "https://www.figma.com/file/OwPpYBki8yOF4kTeYx4GO1/1%EC%A1%B0-%EB%AC%B4%EB%B9%84%EC%85%80%EB%A0%89?type=design&node-id=0%3A1&mode=design&t=irg1sHUdKbJeonc3-1",
    figmaImage: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
  },
];

export const PlotData: IPlotData[] = [
  {
    id: 2,
    title: "큐링이노스",
    period: "제작기간 :23.08.29. ~ 09.12",
    caption:
      "큐링이노스는 (주)블라스트 채용 기업과제로 2주간 참여한 프로젝트입니다. 큐링이노스는 무인테니스 창업회사입니다. 업체 등록과 고객관리를 할수있는 백오피스를 작업하였으며 업체측의 정산내역과 고객의 사용내역 부분을 맡아서 진행하였습니다. Mui라이브러리를 사용하여 재활용성이 높은 컴포넌트 구성했으며 전체 ui에 사용했습니다. ",
    plot: ["고객사 백오피스 제작", "정산내역 월간,년간 테이블 구현", "사용내용 일간,주간,월간 테이블 구현 "],
    stack: [
      {
        name: "Typescript",
        caption:
          "TypeScript를 적용하여 코드의 안정성을 확보하고, 명시적인 타입 표현으로 코드의 가독성을 향상시키고 런타임 오류를 방지합니다",
      },
      {
        name: "React",
        caption: "virutal DOM의 장단점을 알고 컴포넌트 재사용 에 익숙하고 기본적인 hook 사용에 익숙합니다",
      },
      {
        name: "Justand",
        caption:
          "해당 프로젝트에서 사용중이던 Justand를 이어서 사용했습니다. recoil과 사용방법이 유사했으며 간편하게 사용이 가능했습니다.",
      },
      {
        name: "React-Table",
        caption:
          "정산내역 및 사용내역을 React-Table로 통일하여 빠르게 작업이 가능했습니다. 제공해주는 hook이 많아서 초기에 이해하기 힘든점이 있었지만 익숙해진 후에는 빠르게 테이블 생성이 가능했습니다",
      },
    ],
    gitLink: "https://github.com/inggu96/curing",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "",
    pubImage: "",
    figmaLink: "",
    figmaImage: "",
  },

  {
    id: 3,
    title: "위플리",
    period: "제작기간 : 2023.05.20 ~ 07.31",
    caption:
      "위플리는 유튜브 Api를 사용해 영상을 뮤직플레이어로 사용이 가능한 서비스입니다. 부트캠프 팀프로젝트 다시 협업을 하기엔 아직까진 역량이 부족하다고 판단하여 개인 공부와 같이 토이프로젝트로 진행한 서비스입니다 Youtube에서 제공하는 오픈Api를 사용하여 인기리스트 및 검색기능을 구현했습니다.",
    plot: ["Youtube Api를 사용한 유튜브 영상 뮤직플레이어 ", "전체 레이아웃 구성과 인기리스트 및 검색페이지 구현"],
    stack: [
      {
        name: "JavaScript",
        caption:
          "es6 문법을 사용하는 것에 익숙하고 JavaScript의 동작 원리 를 이해하고 있습니다. 브라우저 환경과 Node.js 환경의 차이점 을 알고 있습니다.",
      },
      {
        name: "React",
        caption:
          "인프라가 넓은 이유로 리액트를 선택했으며 컴포넌트 재사용과 JSX문법을 이용한 직관적인 템플릿을 구성했습니다",
      },
      {
        name: "Redux",
        caption:
          "전역 상태관리 라이브러리중 flux 패턴의 기본적인 동작 원리를 이해하기위해 Redux를 사용했으며 api를 리덕스로 관리해 잦은 렌더링이 발생하지않게 전역으로 사용했으며 로딩과 에러처리 또한 리덕스를 사용하여 관리하였습니다",
      },
      {
        name: "css-in-js",
        caption:
          "컴포넌트 위주의 프로젝트에서 개발 효율성을 중요시 하고, 필요한 CSS 스타일 요소만 로딩하기 때문에 사용하게 되었습니다.",
      },
    ],
    gitLink: "https://github.com/inggu96/Weply",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "http://weply.s3-website.ap-northeast-2.amazonaws.com/",
    pubImage: "https://user-images.githubusercontent.com/122377401/255330812-33626ba9-ca9e-4071-8ce4-9031770b22ea.png",
    figmaLink: "",
    figmaImage: "",
  },

  {
    id: 4,
    title: "무비셀렉터",
    period: "제작기간 : 23.03.13 ~ 04.14",
    caption:
      "무비셀렉터는 영화평점등록 서비스입니다. 코드스테이츠 부트캠프에서 진행한 팀프로젝트 작업이며 , 메인페이지와 프리뷰페이지와 전체 디자인 기획을 맡아서 구현하였습니다 Framer-motion을 이용한 애니메이션 작업을 중점적으로 작업했으며 디자인은 피그마를 이용해 팀원들과 빠른 소통과 명확한 의도를 담을 수 있게 노력하였습니다 , 현재는 서버배포가 끝나 깃허브 리드미에서 간략하게 확인이 가능합니다 추후 Django를 사용해 다시 배포할 예정입니다",
    plot: ["메인페이지 구현", "프리뷰페이지 구현", "디자인 기획"],
    stack: [
      {
        name: "JavaScript",
        caption:
          "es6 문법을 사용하는 것에 익숙하고 JavaScript의 동작 원리 를 이해하고 있습니다. 브라우저 환경과 Node.js 환경의 차이점 을 알고 있습니다.",
      },
      { name: "React", caption: "React는 UI를 구축하기 위한 JavaScript 라이브러리입니다." },
      {
        name: "Recoil",
        caption: "복잡한 redux와 달리 recoil을 사용하여 쉽고 간단하게 전역 상태를 관리 할 수 있습니다.",
      },
      {
        name: "Scss",
        caption: "코드의 재활용성을 올리고, 가독성을 올리는 위해 scss를 사용해 개발의 효율을 올렸습니다.",
      },
    ],
    gitLink: "https://github.com/inggu96/select_movie",
    gitImage: "https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png",
    pubLink: "http://test-imagine.s3-website.ap-northeast-2.amazonaws.com/",
    pubImage: "https://user-images.githubusercontent.com/122377401/259013017-1935dea4-2631-4279-b79b-e8cc69eb6e20.jpeg",
    figmaLink:
      "https://www.figma.com/file/OwPpYBki8yOF4kTeYx4GO1/1%EC%A1%B0-%EB%AC%B4%EB%B9%84%EC%85%80%EB%A0%89?type=design&node-id=0%3A1&mode=design&t=irg1sHUdKbJeonc3-1",
    figmaImage: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
  },
];
export const ActData: IActData[] = [
  {
    id: 1,
    title: "CS면접 스터디",
    period: "진행기간 : 23년 08월 ~ 10월",
    caption:
      "기술면접을 위한 스터디를 진행하였습니다. 매주 월금 2시간씩 강남역부근 스터디카페에서 진행했으며 , CS/Web/NetWork - React - JavaScript - Html - 자료구조 순으로 총 2달간 진행하면서 매회차마다 분량을 정해 관련된 공부를 하고 각자 발표를 하면서 부족했던 cs지식과 사용하는 프레임워크의 깊이에 관해 스터디를 통해 배우게 되었습니다",
  },
  {
    id: 2,
    title: "일가자인력 부산점",
    period: "업무기간 : 20년 09월 ~ 22년 09월",
    caption:
      "군경력을 살려 모바일 인력사무실 창업을 했습니다. 인력사무소장 업무를 맡아서 했으며 일일건설업종 근로자와 구인자를 알선하는 업무 및 모바일 어플을 사용해 근로자의 근퇴관리와 구인자의 임금납부 등의 업무를 2년간 진행했습니다.",
  },
  {
    id: 3,
    title: "제10 전투비행단",
    period: "업무기간 : 17년 03월 ~ 20년 03월",
    caption:
      "항공정비과 졸업 후 공군부사관에 관련전공으로 지원하여 3년간 공군부사관으로써 항공기체정비 및 자재관리 행정업무 등을 맡아해왔습니다.",
  },
];
