import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";

const CareerSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
      <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-semibold">Current Position</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
            <div>
              <h3 className="text-lg md:text-xl font-medium">디엠스튜디오 O2O사업부</h3>
              <p className="mt-1 text-sm md:text-base text-gray-600">Full Stack Engineer</p>
            </div>
            <Badge variant="secondary" className="self-start md:self-auto text-sm">
              2024.03 ~ Present
            </Badge>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              그누보드5 기반 웹사이트 풀스택 개발
            </li>
            <li className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              UI/UX 디자인 및 프론트엔드 개발
            </li>
            <li className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              PHP 백엔드 개발 및 유지보수
            </li>
          </ul>
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/career");
              }}
            >
              근무이력 조회
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default CareerSection;
