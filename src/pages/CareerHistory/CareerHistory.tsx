import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    title: "MOGOTS - K-POP 굿즈 크로스보더 커머스 플랫폼",
    period: "2024.05 ~ 2025.02",
    role: "프론트엔드 개발 리드",
    description: "일본 K-POP 팬들을 위한 공식 굿즈 직구 플랫폼 구축",
    achievements: [
      "Next.js 14 기반 크로스보더 커머스 플랫폼 구축",
      "LINE 소셜 로그인, KG이니시스 결제, EXMATE 배송 추적 시스템 통합",
      "850+ 커밋을 통한 지속적인 기능 개선 및 성능 최적화",
      "일 평균 30,000 MAU, 결제 처리 1,000건 달성",
    ],
    techStack: ["Next.js", "TypeScript", "SWR", "Meilisearch", "Sharp"],
  },
  {
    title: "완도 웨어러블 대시보드",
    period: "2023",
    role: "웹 개발 총괄",
    description: "건강증진 데이터 분석 대시보드 설계 및 구축",
    achievements: [
      "권한별 맞춤형 데이터 시각화",
      "심박수, 운동량 등 건강 데이터 실시간 모니터링",
      "연구 데이터 자동 집계 및 엑셀 추출 기능 개발",
    ],
    techStack: ["React", "D3.js", "Node.js", "MySQL"],
  },
  // ... 다른 프로젝트들도 같은 형식으로 추가
];

export const CareerHistory = () => {
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
                <Badge variant="outline">{project.role}</Badge>
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
                  <Badge key={i} variant="secondary">
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
