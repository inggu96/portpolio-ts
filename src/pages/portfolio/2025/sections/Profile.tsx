import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";

const ProfileSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Full Stack Engineer
          </h1>
          <div className="flex gap-2 items-center mt-2">
            <span className="text-base md:text-lg font-medium text-gray-700">
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

      <Card className="px-2 py-4 md:py-6 border-0 shadow-lg bg-white/50">
        <CardContent className="px-3 md:px-4 py-2">
          <div className="space-y-6 md:space-y-8">
            {/* 기술 스택 섹션 */}
            <div className="relative pl-4 md:pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
              </div>
              <h3 className="text-sm font-medium text-blue-500 mb-2 uppercase tracking-wider">Technical Skills</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Next.js와 Nest.js를 기반으로 웹 서비스를 개발하며, PHP와 MySQL을 활용한 백엔드 개발을 능숙하게 다룰 수
                있습니다.
              </p>
            </div>

            {/* 경험 및 리더십 섹션 */}
            <div className="relative pl-4 md:pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
              </div>
              <h3 className="text-sm font-medium text-blue-500 mb-2 uppercase tracking-wider">Leadership</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                군 간부와 인력 소장 경험에서 얻은 폭넓은 사회경험과 리더십을 바탕으로 주어진 업무를 책임감 있게
                해결해나가고 있으며, 밝은 성격으로 팀원들과 적극적으로 소통하며 다수의 프로젝트를 성공적으로 완수하고
                있습니다.
              </p>
            </div>

            {/* 개발 철학 섹션 */}
            <div className="relative pl-4 md:pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
              </div>
              <h3 className="text-sm font-medium text-blue-500 mb-2 uppercase tracking-wider">Philosophy</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                또한 항상 검증하는 자세로 현재 상태에 안주하지 않고, 사용자 관점에서 지속적으로 문제점을 발견하고 개선해
                나가며 프로젝트의 품질을 높이기 위해 노력하고 있습니다.
              </p>
            </div>

            {/* 현재 진행 중인 프로젝트 섹션 */}
            <div className="relative pl-4 md:pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200">
                <div className="absolute top-0 left-0 right-0 h-12 bg-blue-500" style={{ width: "2px" }} />
              </div>
              <h3 className="text-sm font-medium text-blue-500 mb-2 uppercase tracking-wider">Current Projects</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                현재 디엠스튜디오에서 웹 서비스를 개발하고 있으며, 프론트엔드와 백엔드를 모두 담당하고 있습니다.
                사이드로는 일본 K-POP 팬들을 위한 패션/굿즈 직구 플랫폼인 모고츠를 운영하고 있으며, 유입량 및 주문량
                증가를 위해 고객 데이터를 지속적으로 분석해 대응하고 있습니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default ProfileSection;
