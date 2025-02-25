import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/ui/tabs";

// PDF.js 워커 설정 (중요)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfPath, title }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="mb-4 text-xl font-medium">{title}</h3>
        <div className="flex justify-center p-2 bg-white rounded-md border">
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="py-10 text-center">문서를 불러오는 중...</div>}
            error={<div className="py-10 text-center text-red-500">문서를 불러오는데 실패했습니다.</div>}
          >
            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} width={450} />
          </Document>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
            disabled={pageNumber <= 1}
          >
            이전
          </Button>

          <p className="text-sm">
            {pageNumber} / {numPages || "-"}
          </p>

          <Button
            variant="outline"
            onClick={() => setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages)}
            disabled={pageNumber >= numPages}
          >
            다음
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          <Button onClick={() => window.open(pdfPath, "_blank")}>전체 화면으로 보기</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SideProjectSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="mb-6 text-2xl font-semibold">Side Project</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">Mogotsu (もごつ)</h3>
              <p className="mt-1 text-gray-600">Full Stack Engineer</p>
              <p className="mt-1 text-gray-600">K-POP 패션/굿즈 크로스보더 커머스 플랫폼</p>
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
                Next.js , TypeScript , Nest.js , Prisma 기반 웹사이트 풀스택 개발
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
            <div className="flex justify-between">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open("https://mogotsu.com/", "_blank")}
              >
                웹사이트 방문하기
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/projects/mogotsu");
                }}
              >
                자세히 보기
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <section className="mt-8">
        <h3 className="mb-4 text-2xl font-bold">프로젝트 외주</h3>
        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <h4 className="mb-3 text-xl font-medium">레인조 라이딩스쿨</h4>
              <p className="text-gray-700">
                지인의 추천으로 맡게 된 외주 프로젝트로, 오토바이 라이딩스쿨 웹사이트를 디자인하고 개발했습니다.{" "}
              </p>
              <p className="text-gray-700">
                퇴근후에 작업했으며, 담당자와의 원활한 소통을 바탕으로 빠르고 효율적인 프로젝트 진행이 가능했습니다.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="mb-2 font-medium">프로젝트 진행 과정</h5>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 p-3 bg-gray-50 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="flex justify-center items-center mr-2 w-8 h-8 font-bold text-white bg-blue-500 rounded-full">
                      1
                    </div>
                    <span className="font-medium">외주 시작 및 초안 작업</span>
                  </div>
                  <p className="text-sm text-gray-600">2025년 1월 10일 ~ 1월 12일 (2일)</p>
                </div>

                <div className="flex-1 p-3 bg-gray-50 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="flex justify-center items-center mr-2 w-8 h-8 font-bold text-white bg-blue-500 rounded-full">
                      2
                    </div>
                    <span className="font-medium">피드백 수정 및 회신</span>
                  </div>
                  <p className="text-sm text-gray-600">1월 12일 ~ 1월 17일 (5일)</p>
                </div>

                <div className="flex-1 p-3 bg-gray-50 rounded-md border">
                  <div className="flex items-center mb-2">
                    <div className="flex justify-center items-center mr-2 w-8 h-8 font-bold text-white bg-blue-500 rounded-full">
                      3
                    </div>
                    <span className="font-medium">웹 구현 및 완료</span>
                  </div>
                  <p className="text-sm text-gray-600">1월 17일 ~ 1월 20일 (3일)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-medium">프로젝트 기간</h5>
                <ul className="list-disc list-inside text-gray-700">
                  <li>담당인원 : 단독</li>
                  <li>디자인 시안 및 피드백: 7일</li>
                  <li>웹 개발 및 퍼블리싱: 3일</li>
                  <li>총 소요 기간: 10일</li>
                </ul>
              </div>

              <div>
                <h5 className="mb-2 font-medium">주요 성과</h5>
                <ul className="list-disc list-inside text-gray-700">
                  <li>효율적인 커뮤니케이션으로 빠른 프로젝트 완료</li>
                  <li>클라이언트 요구사항 100% 반영</li>
                  <li>모바일 최적화 디자인 구현</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-6 md:justify-start">
              <Button variant="outline" onClick={() => window.open("/docs/rainjo_initial_design.pdf", "_blank")}>
                디자인 초안 보기
              </Button>
              <Button variant="outline" onClick={() => window.open("/docs/rainjo_revision.pdf", "_blank")}>
                수정 문서 보기
              </Button>
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open("https://rca.kr/", "_blank")}
              >
                웹사이트 방문하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </motion.section>
  );
};

export default SideProjectSection;
