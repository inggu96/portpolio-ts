import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { mogotsuDetail } from "@/constants/MogotsuDetail";

export const MogotsuDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 py-8 md:py-12 mx-auto">
      <div className="flex gap-4 items-center mb-4">
        <Button variant="outline" onClick={() => navigate("/")} className="text-sm md:text-base">
          ← 돌아가기
        </Button>
      </div>
      <div className="flex gap-4 items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">{mogotsuDetail.title}</h1>
      </div>

      {/* 프로젝트 개요 */}
      <Card className="mb-6 md:mb-8">
        <CardHeader>
          <h2 className="text-xl md:text-2xl font-bold">프로젝트 개요</h2>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <p className="mb-4 text-sm md:text-base">{mogotsuDetail.overview}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
