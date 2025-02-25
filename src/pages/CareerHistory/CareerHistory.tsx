import { Badge } from "@/components/common/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/constants/Project";

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
