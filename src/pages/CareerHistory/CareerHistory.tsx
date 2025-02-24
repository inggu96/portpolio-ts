import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "MOGOTSU - K-POP 패션/굿즈 커머스 플랫폼",
    period: "2024.05 ~ 2025.02",
    role: "개발 리드",
    description: "일본 K-POP 팬들을 위한 공식 굿즈 직구 플랫폼 구축",
    achievements: [
      "Next.js 14 기반 크로스보더 커머스 플랫폼 구축",
      "LINE 소셜 로그인, KG이니시스 결제, EXMATE 배송 추적 시스템 통합",
      "850+ 커밋을 통한 지속적인 기능 개선 및 성능 최적화",
      "일 평균 30,000 MAU, 결제 처리 1,000건 달성",
    ],
    techStack: ["Next.js", "tailwind", "Next ui", "nest.js", "TypeScript", "mysql", "SWR", "Meilisearch", "Sharp"],
  },
  {
    title: "완도해양축제 VR 전시",
    period: "2024.04",
    role: "영업/운영 총괄",
    description: "웹 대시보드 및 VR 투어 현장 전시 운영",
    achievements: [
      "대규모 행사장 환경에서의 VR 기기 운영 최적화",
      "네트워크 문제 해결을 위한 대체 통신 시스템 구축",
      "현장 관람객 대상 VR 투어 시스템 시연 및 교육",
      "주최측 요구사항 실시간 대응 및 솔루션 제공",
    ],
    techStack: ["VR Hardware", "Network Management", "Customer Service"],
  },
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
      "9,000줄의 하드코딩된 3D 위치값을 DB 시스템으로 마이그레이션",
      "에스컬레이터, 엘리베이터, 공간 텔레포트 등 커스텀 기능 개발",
      "3D 파티션 개별 토글 시스템 구현",
      "관리자 대시보드를 통한 실시간 3D 공간 데이터 관리 시스템 구축",
    ],
    techStack: ["Matterport SDK", "JavaScript", "MySQL", "Three.js", "php"],
  },
];

export const CareerHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-bold">Career History</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-gray-500">{project.period}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge variant="outline">{project.role}</Badge>
                  {project.title.includes("MOGOTSU") && (
                    <Button variant="outline" size="sm" onClick={() => navigate("/projects/mogotsu")}>
                      상세보기
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">{project.description}</p>
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">주요 성과</h3>
                <ul className="pl-5 space-y-2 list-disc">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="destructive">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
