import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "완도 웨어러블 대시보드",
    period: "2024.04~2024.06",
    role: "웹 개발 총괄",
    description: "건강증진 데이터 분석 대시보드 설계 및 구축",
    achievements: [
      "권한별 맞춤형 데이터 시각화",
      "심박수, 운동량 등 건강 데이터 실시간 모니터링",
      "연구 데이터 자동 집계 및 엑셀 추출 기능 개발",
    ],
    techStack: ["React", "D3.js", "Node.js", "MySQL"],
  },
  {
    title: "VR Story 브랜딩 프로젝트",
    period: "2024.04~2024.06",
    role: "프로젝트 총괄",
    description: "VR 투어 전문 자회사 브랜딩 웹사이트 구축",
    achievements: [
      "그누보드 기반 커스텀 랜딩페이지 개발",
      "웹사이트 기획 및 디자인 총괄",
      "데이터베이스 설계 및 구축",
      "VR 투어 콘텐츠 통합 관리 시스템 개발",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "GNU Board", "JQuery"],
  },
  {
    title: "이박스 AR 웹 시스템",
    period: "2024.08~2024.10",
    role: "웹 개발 총괄",
    description: "AR 어플리케이션과 연동된 분전함 관리 시스템 구축",
    achievements: [
      "AR 어플리케이션과 웹 시스템 실시간 연동 구현",
      "분전함 위치 추적 및 업무 관리 시스템 개발",
      "24년도 경제진흥원 아이디어 지원화 사업 1등 달성",
      "차년도 고도화 프로젝트 컨설팅 수주",
    ],
    techStack: ["php", "jQuery", "MySQL"],
  },
  {
    title: "내셔널PPE 3D 웹 프로젝트",
    period: "2024.08~2024.10",
    role: "프로젝트 매니저",
    description: "안전화 제품 3D 시각화 및 웹 홍보 프로젝트",
    achievements: [
      "Three.js 기반 3D 제품 시각화 시스템 기획",
      "웹빌더 제약 환경 극복을 위한 대체 솔루션 개발",
      "언리얼 엔진 렌더링을 활용한 고품질 시각화 구현",
      "제품 부품별 인터랙티브 영상 제작 및 통합",
    ],
    techStack: ["Three.js", "Unreal Engine", "After Effects", "WebGL"],
  },
  {
    title: "벡스코 가상화 프로젝트",
    period: "2024.09~2024.12",
    role: "웹 SDK 총괄",
    description: "Matterport 기반 전시장 가상화 프로젝트 개발 및 운영",
    achievements: [
      "9,000줄의 하드코딩된 3D 위치값을 DB 시스템으로 마이그레이션 이후 직접 수동으로 입력하던 포지션값들을 동적패널을 구성해 화면에서 바로 위치시키는 자동화 시스템 구축",
      "에스컬레이터, 엘리베이터, 공간 텔레포트 등 커스텀 기능 개발",
      "3D 파티션 개별 토글 시스템 구현",
      "관리자 대시보드를 통한 실시간 3D 공간 데이터 관리 시스템 구축",
    ],
    techStack: ["Matterport SDK", "JavaScript", "MySQL", "Three.js", "php"],
  },
];
