import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";

const EducationSection = () => {
  const educations = [
    {
      id: 1,
      title: "Code States ABC-Lab",
      position: "Web Frontend",
      period: "2023.01 ~ 2023.04",
      description: "웹 프론트엔드 개발 심화 과정을 수료하며 React, TypeScript 등 현대적인 웹 개발 기술을 학습했습니다.",
    },
    {
      id: 2,
      title: "SBS Academy",
      position: "Web Publishing",
      period: "2019.06 ~ 2019.11",
      description: "웹 퍼블리싱 과정을 통해 HTML, CSS, JavaScript 기초 및 반응형 웹 디자인 기술을 습득했습니다.",
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-16">
      <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-semibold">Education</h2>
      <div className="space-y-4">
        {educations.map((education) => (
          <Card key={education.id} className="overflow-hidden">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">{education.title}</h3>
                  <p className="mt-1 text-sm md:text-base text-gray-600">{education.position}</p>
                </div>
                <Badge variant="secondary" className="self-start md:self-auto text-sm">
                  {education.period}
                </Badge>
              </div>
              <Separator className="my-3 md:my-4" />
              <p className="text-sm md:text-base text-gray-700">{education.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;
