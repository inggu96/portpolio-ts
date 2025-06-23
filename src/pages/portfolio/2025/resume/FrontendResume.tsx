import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import CareerSection from "../sections/Career";
import SideProjectSection from "../sections/SideProject";
import ExperienceSection from "../sections/Experience";
import EducationSection from "../sections/Education";

const FrontendResume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container max-w-4xl px-4 py-16 mx-auto">
        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="flex flex-col items-start justify-between mb-8 md:flex-row md:items-center">
            <div className="flex flex-col mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Frontend Engineer
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-base font-medium text-gray-700 md:text-lg">
                  소통에서 답을 찾는 개발자 이인국입니다.
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/inggu96" className="transition-opacity hover:opacity-80">
                <IoLogoGithub size={24} className="md:w-8 md:h-8" />
              </a>
              <a href="https://velog.io/@96_inggu" className="transition-opacity hover:opacity-80">
                <SiVelog size={24} className="md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </motion.header>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="px-2 py-4 border-0 shadow-lg md:py-6 bg-white/50">
            <CardContent className="px-3 py-2 md:px-4">
              <div className="space-y-6 md:space-y-8">
                {/* 기술 스택 섹션 */}
                <div className="relative pl-4 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
                  </div>
                  <h3 className="mb-2 text-sm font-medium tracking-wider text-blue-500 uppercase">Technical Skills</h3>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    Next.js와 React를 기반으로 현대적인 웹 애플리케이션을 개발하며, TypeScript와 Tailwind CSS를 활용한
                    타입 안전하고 반응형 UI 구현에 능숙합니다.
                  </p>
                </div>

                {/* 경험 및 리더십 섹션 */}
                <div className="relative pl-4 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
                  </div>
                  <h3 className="mb-2 text-sm font-medium tracking-wider text-blue-500 uppercase">Leadership</h3>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    군 간부와 인력 소장 경험에서 얻은 폭넓은 사회경험과 리더십을 바탕으로 주어진 업무를 책임감 있게
                    해결해나가고 있으며, 밝은 성격으로 팀원들과 적극적으로 소통하며 다수의 프로젝트를 성공적으로
                    완수하고 있습니다.
                  </p>
                </div>

                {/* 개발 철학 섹션 */}
                <div className="relative pl-4 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
                  </div>
                  <h3 className="mb-2 text-sm font-medium tracking-wider text-blue-500 uppercase">Philosophy</h3>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    또한 항상 검증하는 자세로 현재 상태에 안주하지 않고, 사용자 관점에서 지속적으로 문제점을 발견하고
                    개선해 나가며 프로젝트의 품질을 높이기 위해 노력하고 있습니다.
                  </p>
                </div>

                {/* 현재 진행 중인 프로젝트 섹션 */}
                <div className="relative pl-4 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
                  </div>
                  <h3 className="mb-2 text-sm font-medium tracking-wider text-blue-500 uppercase">Current Projects</h3>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    이전까지 디엠스튜디오에서 웹 서비스를 개발하고 있으며, 프론트엔드와 백엔드를 모두 담당했습니다.
                    사이드로는 일본 K-POP 팬들을 위한 패션/굿즈 직구 플랫폼인 모고츠를 운영하고 있으며, 유입량 및 주문량
                    증가를 위해 고객 데이터를 지속적으로 분석해 대응하고 있습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Core Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      Next.js 14
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      JavaScript (ES6+)
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Styling & UI</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      CSS3
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Responsive Design
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      UI/UX Design
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">State Management & Data</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      SWR
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      React Query
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Context API
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      REST API
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      Git
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Vercel
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Google Analytics
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      SEO
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Jenkins
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Career Position */}
        <CareerSection />

        {/* Side Project */}
        <SideProjectSection />

        {/* Side Projects */}

        {/* Experience */}
        <ExperienceSection />

        {/* Education */}
        <EducationSection />
      </main>
    </div>
  );
};

export default FrontendResume;
