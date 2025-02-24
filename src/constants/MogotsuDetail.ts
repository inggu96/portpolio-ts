import { ProjectDetail } from "@/types/MogotsuDetail";

export const mogotsuDetail: ProjectDetail = {
  title: "MOGOTS (モゴッツ) - K-POP 아이돌 굿즈 크로스보더 커머스 플랫폼",
  period: "2024.05 ~ 2025.02",
  overview:
    "일본 K-POP 팬들을 위한 공식 굿즈 직구 플랫폼으로, 한일 간 물류 시스템과 결제 시스템을 통합하여 원스톱 쇼핑 경험을 제공합니다. LINE 소셜 로그인, KG이니시스 일본 결제, EXMATE 배송 추적 등 양국의 주요 서비스들을 성공적으로 연동했습니다.",
  projectScale: {
    duration: "10개월",
    commits: "850+ commits",
    teamSize: "프론트엔드 개발자 1명",
  },
  performance: [
    "일 평균 트래픽 30,000 MAU 달성",
    "크로스보더 결제 성공률 99.9%",
    "일평균 결제 처리 1,000건",
    "LINE 소셜 로그인으로 회원가입 전환율 65% 증가",
    "EXMATE 배송 추적 자동화로 CS 문의 40% 감소",
  ],
  developmentPhases: [
    {
      name: "Phase 1: 기반 구축",
      period: "2024.05 ~ 2024.06",
      details: [
        "Next.js 14 기반 확장 가능한 프로젝트 구조 설계",
        "LINE OAuth2.0 소셜 로그인 통합",
        "TypeScript를 활용한 타입 안정성 확보",
        "Next UI 컴포넌트 시스템 구축",
      ],
    },
    {
      name: "Phase 2: 핵심 기능 개발",
      period: "2024.06 ~ 2024.07",
      details: [
        "KG이니시스 일본 결제 시스템 연동",
        "EXMATE 배송 추적 시스템 구축",
        "SWR을 활용한 효율적인 데이터 페칭",
        "실시간 동기화 시스템 구축",
      ],
    },
    {
      name: "Phase 3: 서비스 고도화",
      period: "2024.08 ~ 2024.09",
      details: [
        "Meilisearch 기반 검색 시스템 구축",
        "상품 자동 등록 스케줄러 개발",
        "실시간 재고 동기화 시스템 구현",
        "Node.js 기반 크롤링 스크립트 개발",
      ],
    },
    {
      name: "Phase 4: 성능 최적화",
      period: "2024.10 ~ 2025.02",
      details: [
        "대규모 트래픽 대응을 위한 성능 최적화",
        "Server/Client Component 분리 전략 수립",
        "이미지 최적화 및 CDN 활용",
        "Sharp 라이브러리 활용 이미지 처리",
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
