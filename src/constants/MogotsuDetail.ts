import { ProjectDetail } from "@/types/MogotsuDetail";

export const mogotsuDetail: ProjectDetail = {
  title: "MOGOTS (モゴッツ) - K-POP 아이돌 굿즈 크로스보더 커머스 플랫폼",
  period: "2024.05 ~ 2025.02",
  overview:
    "일본 K-POP 팬들을 위한 공식 굿즈 직구 플랫폼으로, 한일 간 물류 시스템과 결제 시스템을 통합하여 원스톱 쇼핑 경험을 제공합니다. LINE 소셜 로그인, KG이니시스 일본 결제, EXMATE 배송 추적 등 양국의 주요 서비스들을 성공적으로 연동했습니다.",
  projectScale: {
    duration: "10개월",
    commits: "850+ commits",
    teamSize: "프론트엔드 기반 풀스텍 개발자 1명 , 백엔드 기반 풀스텍 개발자 1명 , 상품 MD 1명 , 마케터 1명 ",
  },
  performance: [
    "월간 총 페이지뷰 135,000회 달성",
    "주간 평균 사용자 2400명 달성",
    "LINE 소셜 로그인으로 회원가입 전환율 65% 증가",
    "EXMATE 배송 추적 자동화로 CS 문의 40% 감소",
    "총 일본 유저 수 200명 달성",
  ],
  developmentPhases: [
    {
      name: "Phase 1: 기반 구축",
      period: "2024.06 ~ 2024.07",
      details: [
        "Next.js 14 기반 확장 가능한 프로젝트 구조 설계",
        "LINE OAuth2.0 소셜 로그인 통합",
        "TypeScript를 활용한 타입 안정성 확보",
        "Next UI 컴포넌트 시스템 구축",
      ],
    },
    {
      name: "Phase 2: 핵심 기능 개발",
      period: "2024.07 ~ 2024.08",
      details: [
        "KG이니시스 일본 결제 시스템 연동",
        "EXMATE 배송 추적 시스템 구축",
        "SWR을 활용한 효율적인 데이터 페칭",
        "실시간 동기화 시스템 구축",
      ],
    },
    {
      name: "Phase 3: 서비스 고도화",
      period: "2024.09 ~ 2024.10",
      details: ["상품 자동 등록 스케줄러 개발", "실시간 재고 동기화 시스템 구현", "Node.js 기반 크롤링 스크립트 개발"],
    },
    {
      name: "Phase 4: MVP 배포 및 데이터 기반 서비스 최적화",
      period: "2024.10 ~ 2024.12",
      details: [
        "MVP 배포 및 실사용자 피드백 수집",
        "Meilisearch 기반 검색 시스템 구축",
        "Google Analytics 4 통합 및 이벤트 트래킹 구현",
        "최근 본 상품 및 최근 검색어 기능 개발",
        "사용자 행동 데이터 수집 및 분석 시스템 구축",
        "데이터 기반 UI/UX 최적화 및 개선",
        "퍼포먼스 모니터링 및 병목 현상 개선",
      ],
    },
    {
      name: "Phase 5: 검색엔진 최적화",
      period: "2024.12 ~ 2025.01",
      details: [
        "이미지 최적화 및 CDN 활용",
        "Sharp 라이브러리 활용 이미지 처리",
        "Google Ads 연동을 위한 상품 데이터 CSV 추출 구현",
        "타겟 고객 세그먼트 데이터 기반 맞춤형 광고 구현",
        "상품 메타데이터를 활용한 사이트맵 자동 생성",
        "SEO 최적화 및 검색엔진 노출 개선",
        "SNS 공유 시 OpenGraph 메타데이터 최적화",
      ],
    },
    {
      name: "Phase 6: 성능 최적화 및 리팩토링",
      period: "2025.01 ~ 2025.02",
      details: [
        "Server/Client Component 분리를 통한 렌더링 최적화",
        "회원가입 유도를 위한 쿠폰안내 배너 등 상세페이지 배너 , 인포카트 추가 기획 및 구현",
        "셀럽 페이지 및 브랜드 페이지 UI/UX 개선 기능 추가를 위한 코드 리팩토링 ",
        "카테고리 시스템 안정화 및 검색 기능 고도화",
        "장바구니 개선 및 묶음 할인 프로모션 기획 및 개발",
        "사용자 구매유도를 위한 상품 상세 페이지 성능 개선 및 사용가능한 쿠폰 등의 이벤트 배너구현",
        "쿠폰 및 배송추적 알림 시스템 구현 및 사용자 피드백 반영",
        "리뷰 시스템 구축 및 통합",
      ],
    },
  ],
  technicalChallenges: [
    {
      category: "크로스보더 결제 안정화",
      solutions: ["결제 시도/실패 로깅 시스템", "자동 재시도 메커니즘", "환율 변동 자동 반영"],
    },
    {
      category: "실시간 배송 추적",
      solutions: ["WebSocket 기반 실시간 업데이트", "배송 상태 캐싱 전략", "배송 지연 자동 감지"],
    },
    {
      category: "소셜 로그인 보안",
      solutions: ["CSRF 방어", "토큰 갱신 자동화", "세션 관리 최적화"],
    },
  ],
  integrationSystems: [
    {
      system: "LINE 소셜 로그인",
      details: ["LINE OAuth2.0 프로토콜 구현", "사용자 프로필 정보 동기화", "자동 회원가입 플로우"],
    },
    {
      system: "KG이니시스 일본 결제",
      details: ["다중 통화 결제 처리", "결제 실패 복구 메커니즘", "결제 내역 실시간 동기화"],
    },
    {
      system: "EXMATE 배송 추적",
      details: ["실시간 배송 상태 모니터링", "자동 알림 시스템", "배송 이슈 조기 감지"],
    },
  ],
};
