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
    title: "위플리",
    period: "제작기간 : 2023.05.20 ~ 07.31",
    caption:
      "위플리는 유튜브 Api를 사용해 영상을 뮤직플레이어로 사용이 가능한 서비스입니다.리액트 활용와 자료구조를 추가적으로 학습하고 적용하기위해 진행한 개인 프로젝트입니다",
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
    id: 3,
    title: "무비셀렉터",
    period: "제작기간 : 23.03.13 ~ 04.14",
    caption: "부트캠프 협업 프로젝트인 영화 평점 사이트입니다",
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
    title: "일가자인력 부산점",
    period: "업무기간 : 20년 09월 ~ 22년 09월",
    caption:
      "군경력을 살려 모바일 인력사무실 창업을 했습니다. 인력사무소장 업무를 맡아서 했으며 일일건설업종 근로자와 구인자를 알선하는 업무 및 모바일 어플을 사용해 근로자의 근퇴관리와 구인자의 임금납부 등의 업무를 2년간 진행했습니다.",
  },
  {
    id: 2,
    title: "제10 전투비행단",
    period: "업무기간 : 17년 03월 ~ 20년 03월",
    caption:
      "항공정비과 졸업 후 공군부사관에 관련전공으로 지원하여 3년간 공군부사관으로써 항공기체정비 및 자재관리 행정업무 등을 맡아해왔습니다.",
  },
];
