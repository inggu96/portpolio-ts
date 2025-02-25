import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";

const SideProjectSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="mb-6 text-2xl font-semibold">Side Project</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">MOGOTS (モゴッツ)</h3>
              <p className="mt-1 text-gray-600">K-POP 굿즈 크로스보더 커머스 플랫폼</p>
            </div>
            <Badge variant="secondary">2024.06 ~ Present</Badge>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <p className="text-gray-700">
              일본 K-POP 팬들을 위한 공식 굿즈 직구 플랫폼으로, 자사몰 형태로 구축 및 운영
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Next.js , Nest.js , TypeScript 기반 웹사이트 풀스택 개발
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                NCP 서버환경 구축 및 호스팅(vercel),도메인(godaddy) 세팅 및 인프라관리
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                UI/UX 디자인 및 프론트엔드/백앤드 구현
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                구글광고 세팅 및 애널리틱스를 이용한 유저 데이터 분석
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Next.js 14</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">SWR</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => navigate("/projects/mogotsu")}>
                자세히 보기
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default SideProjectSection;
