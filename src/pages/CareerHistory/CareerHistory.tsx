import { Badge } from "@/components/common/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/constants/Project";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/common/ui/dialog";

export const CareerHistory = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openVideoModal = (videoPath: string) => {
    setCurrentVideo(videoPath);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="container px-4 py-8 md:py-12 mx-auto">
      <div className="flex gap-4 items-center mb-4">
        <Button variant="outline" onClick={() => navigate("/")} className="text-sm md:text-base">
          ← 돌아가기
        </Button>
      </div>
      <div className="flex gap-4 items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Career History</h1>
      </div>
      <div className="space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                  <p className="mt-1 text-sm md:text-base text-gray-600">{project.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="self-start md:self-auto text-sm">
                    {project.period}
                  </Badge>
                  {project.title.includes("MOGOTSU") && (
                    <Button variant="outline" size="sm" onClick={() => navigate("/projects/mogotsu")}>
                      상세보기
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <p className="mb-4 text-sm md:text-base text-gray-700">{project.description}</p>
              <div className="mb-6">
                <h3 className="mb-2 text-base md:text-lg font-semibold">주요 성과</h3>
                <ul className="pl-5 space-y-2 list-disc">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm md:text-base text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* tech stack badges - 모바일에서는 먼저 표시 */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 order-first md:order-last">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="destructive" className="text-xs md:text-sm px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* buttons - 모바일에서는 나중에 표시 */}
                <div className="flex flex-wrap items-center gap-2 order-last md:order-first">
                  <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-sm md:text-base h-8 md:h-10"
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={project.secure}
                  >
                    웹사이트 방문하기
                  </Button>
                  {project.addVideo && (
                    <Button
                      variant="outline"
                      onClick={() => openVideoModal("/dms/bexco.mp4")}
                      className="flex items-center gap-1 text-sm md:text-base h-8 md:h-10"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      시연 자료
                    </Button>
                  )}
                  {project.secure && (
                    <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black">
          <button
            className="absolute right-4 top-4 rounded-sm transition-opacity hover:opacity-80 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50 bg-white p-1"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03157 3.2184C3.80702 2.99385 3.44295 2.99385 3.2184 3.2184C2.99385 3.44295 2.99385 3.80702 3.2184 4.03157L6.68682 7.50005L3.2184 10.9685C2.99385 11.193 2.99385 11.5571 3.2184 11.7816C3.44295 12.0062 3.80702 12.0062 4.03157 11.7816L7.50005 8.31322L10.9685 11.7816C11.193 12.0062 11.5571 12.0062 11.7816 11.7816C12.0062 11.5571 12.0062 11.193 11.7816 10.9685L8.31322 7.50005L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {currentVideo && (
            <div className="relative pt-[56.25%]">
              <video className="absolute top-0 left-0 w-full h-full" controls autoPlay>
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
