import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "일가자인력 부산점",
      position: "인력사무소장",
      period: "2020.09 ~ 2022.09",
      description:
        "군경력을 살려 모바일 인력사무실 창업을 했습니다. 인력사무소장 업무를 맡아서 했으며 일일건설업종 근로자와 구인자를 알선하는 업무 및 모바일 어플을 사용해 근로자의 근퇴관리와 구인자의 임금납부 등의 업무를 2년간 진행했습니다. 총 회원수 3,000명을 관리하며, 평균 월 출역 수 300회 이상을 기록했습니다. 또한, 월 200명 정도의 고정적인 인원을 유지하며 안정적인 운영을 이뤄냈으며 , 콘텐츠 마케팅과 랜딩페이지를 직접 퍼블리싱해서 seo작업 및 구글,네이버광고 등을 직접 수행하여 온라인 광고를 통한 고객 유입에 기여했습니다.",
    },
    {
      id: 2,
      title: "굿모닝 간호요양보호사교육원",
      position: "행정실장 및 마케팅 업무",
      period: "2020.05 ~ 2021.09",
      description:
        "코로나로 어려움을 겪는 부모님을 도와 요양보호사교육원 설립을 맡아 진행했으며 초기 설립 시 필요한 요건(임대 및 부자재 , 행정서류 및 프로세스화)를 준비하고 교육원 설립 후 행정업무 및 마케팅 업무를 맡아 진행했습니다.",
    },
    {
      id: 3,
      title: "제10 전투비행단",
      position: "공군부사관",
      period: "2017.03 ~ 2020.03",
      description:
        "항공정비과 졸업 후 공군부사관에 관련전공으로 지원하여 3년간 공군부사관으로써 항공기체정비 및 자재관리 행정업무 등을 맡아해왔습니다.",
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold">Previous Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience) => (
          <Card key={experience.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">{experience.title}</h3>
                  <p className="mt-1 text-gray-600">{experience.position}</p>
                </div>
                <Badge variant="secondary">{experience.period}</Badge>
              </div>
              <Separator className="my-4" />
              <p className="text-gray-700">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
