import { Badge } from "@/components/common/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/constants/Project";

export const CareerHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex gap-4 items-center mb-4">
        <Button variant="outline" onClick={() => navigate("/")}>
          ← 돌아가기
        </Button>
      </div>
      <div className="flex gap-4 items-center mb-4">
        <h1 className="text-4xl font-bold">Career History</h1>
      </div>
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
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={project.secure}
                  >
                    웹사이트 방문하기
                  </Button>
                  {project.secure && (
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      보안상 비공개
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="destructive">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
