import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProjectDetail {
  title: string;
  period: string;
  overview: string;
  projectScale: {
    duration: string;
    commits: string;
    teamSize: string;
  };
  performance: string[];
  developmentPhases: Phase[];
  technicalChallenges: Challenge[];
  integrationSystems: Integration[];
}

interface Phase {
  name: string;
  period: string;
  details: string[];
}

interface Challenge {
  category: string;
  solutions: string[];
}

interface Integration {
  system: string;
  details: string[];
}

const mogotsuDetail: ProjectDetail = {
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

export const MogotsuDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex gap-4 items-center mb-8">
        <Button variant="outline" onClick={() => navigate("/page")}>
          ← 돌아가기
        </Button>
        <h1 className="text-4xl font-bold">{mogotsuDetail.title}</h1>
      </div>

      {/* 프로젝트 개요 */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold">프로젝트 개요</h2>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{mogotsuDetail.overview}</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">기간</h3>
              <p>{mogotsuDetail.projectScale.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold">커밋</h3>
              <p>{mogotsuDetail.projectScale.commits}</p>
            </div>
            <div>
              <h3 className="font-semibold">팀 구성</h3>
              <p>{mogotsuDetail.projectScale.teamSize}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 주요 성과 */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold">주요 성과</h2>
        </CardHeader>
        <CardContent>
          <ul className="pl-5 space-y-2 list-disc">
            {mogotsuDetail.performance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 개발 단계 */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold">개발 단계</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mogotsuDetail.developmentPhases.map((phase, index) => (
              <div key={index}>
                <h3 className="mb-2 text-xl font-semibold">
                  {phase.name} ({phase.period})
                </h3>
                <ul className="pl-5 space-y-1 list-disc">
                  {phase.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 기술적 도전 과제 */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold">기술적 도전 과제</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mogotsuDetail.technicalChallenges.map((challenge, index) => (
              <div key={index}>
                <h3 className="mb-2 text-xl font-semibold">{challenge.category}</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  {challenge.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 통합 시스템 */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold">통합 시스템</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mogotsuDetail.integrationSystems.map((system, index) => (
              <div key={index}>
                <h3 className="mb-2 text-xl font-semibold">{system.system}</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  {system.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
