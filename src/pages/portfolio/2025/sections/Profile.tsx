import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";

const ProfileSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Full Stack Engineer
          </h1>
          <div className="flex gap-2 items-center mt-2">
            <span className="text-lg font-medium text-gray-700">소통에서 답을 찾는 개발자 이인국입니다.</span>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/inggu96" className="transition-opacity hover:opacity-80">
            <IoLogoGithub size={32} />
          </a>
          <a href="https://velog.io/@96_inggu" className="transition-opacity hover:opacity-80">
            <SiVelog size={32} />
          </a>
        </div>
      </div>

      <Card className="px-2 py-6 border-0 shadow-lg bg-white/50">
        <CardContent className="px-4 py-2 space-y-4">
          <p className="text-lg leading-relaxed text-gray-700">
            Next.js와 Nest.js를 기반으로 웹 서비스를 개발하며, PHP와 MySQL을 활용한 백엔드 개발 경험을 보유하고
            있습니다. 군 간부와 인력 소장 경험에서 얻은 리더십을 바탕으로 팀원들과 적극적으로 소통하며, 이를 통해
            사용자의 니즈를 더 깊이 이해하게 되었습니다. 모르는 것을 두려워하지 않고 질문하며 성장하는 자세로, 팀의
            활기와 생산성 향상에 기여합니다.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default ProfileSection;
