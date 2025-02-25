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
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Next.js 14</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">SWR</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
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
