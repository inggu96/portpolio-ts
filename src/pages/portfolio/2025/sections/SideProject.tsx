import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";
import { Button } from "@/components/common/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/common/ui/dialog";
import PDFViewer from "@/components/PDFViewer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper/types";

const SideProjectSection = () => {
  const navigate = useNavigate();
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [currentPdf, setCurrentPdf] = useState<{ path: string; title: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [swiperProgress, setSwiperProgress] = useState(0);

  const openPdfModal = (pdfPath: string, title: string) => {
    setCurrentPdf({ path: pdfPath, title });
    setIsPdfModalOpen(true);
  };

  useEffect(() => {
    if (currentImageIndex !== null && swiper) {
      swiper.slideTo(currentImageIndex);
    }
  }, [currentImageIndex, swiper]);

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
                구글광고 상품등록을 위한 sql쿼리세팅(7만여개 상품 및 고객데이터)
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                애널리틱스를 이용한 유저 데이터 및 사용량 분석 및 대응
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Next.js 14</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">SWR</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>

            <div className="relative w-full overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView="auto"
                className="mySwiper !pb-8"
                navigation={{
                  prevEl: ".swiper-custom-prev",
                  nextEl: ".swiper-custom-next",
                }}
                onSwiper={setSwiper}
                onProgress={(swiper) => {
                  setSwiperProgress(swiper.progress * 100);
                }}
                onSlideChange={(swiper) => {
                  setSwiperProgress((swiper.activeIndex / (swiper.slides.length - 1)) * 100);
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <SwiperSlide key={i} style={{ width: "170px" }}>
                    <div
                      className="transform transition-transform duration-300 hover:-translate-y-2"
                      onClick={() => setCurrentImageIndex(i)}
                    >
                      <img
                        src={`/mogotsu/mogotsu_${i + 1}.jpg`}
                        alt={`Mogotsu Screenshot ${i + 1}`}
                        className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="swiper-custom-prev absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md z-10 hover:bg-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-custom-next absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md z-10 hover:bg-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90px] h-1 bg-gray-200 rounded-full z-10">
                <div
                  className="h-full bg-black rounded-full transition-all duration-300"
                  style={{ width: `${swiperProgress}%` }}
                />
              </div>
            </div>

            <Dialog open={currentImageIndex !== null} onOpenChange={() => setCurrentImageIndex(null)}>
              <DialogContent className="max-w-[50vw] max-h-[90vh] p-0 bg-black/95 border-0">
                {currentImageIndex !== null && (
                  <Swiper
                    initialSlide={currentImageIndex}
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".modal-prev",
                      nextEl: ".modal-next",
                    }}
                    onSwiper={(swiper) => {
                      swiper.slideTo(currentImageIndex, 0);
                    }}
                    className="w-full h-[85vh] flex items-center justify-center"
                  >
                    {[...Array(12)].map((_, i) => (
                      <SwiperSlide key={i} className="flex items-center justify-center">
                        <img
                          src={`/mogotsu/mogotsu_${i + 1}.jpg`}
                          alt={`Mogotsu Screenshot ${i + 1}`}
                          className="w-auto h-auto max-w-full max-h-[80vh] object-contain mx-auto"
                        />
                      </SwiperSlide>
                    ))}
                    <button
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors z-50"
                      onClick={() => setCurrentImageIndex(null)}
                    >
                      ✕
                    </button>
                    <button className="modal-prev absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="modal-next absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Swiper>
                )}
              </DialogContent>
            </Dialog>

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
                개발일지 조회
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
                지인의 추천으로 맡게 된 외주 프로젝트로, 라이딩스쿨 웹 리뉴얼(메인과 일부 api 한정) 및 디자인/개발
              </p>
              <Separator className="my-4" />
              <p className="mb-4 text-gray-700">
                기존에 라라벨로 빌드된 웹사이트 리뉴얼 업무를 맡았으며 프로젝트의 효율적인 진행을 위해 퇴근 후에 시간을
                할애하여 작업을 진행했습니다. 이 과정에서 빠른 피드백을 제공하고, 시각적 자료를 활용한 효과적인
                커뮤니케이션 및 문서화를 통해 담당자와의 원활한 소통을 유지하여 프로젝트를 빠르고 효과적으로 진행할 수
                있었습니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  메인페이지 전체 ui 리뉴얼
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  공지사항 및 교육과정 api 연동
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  교육일정 예약시스템 지역 스케마 추가 및 필터(지역별,교육별,날짜별) 구현
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  교육일정 모바일 ui 구현
                </li>
              </ul>
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

            <div className="flex flex-wrap gap-4 justify-start mt-6">
              <Button
                variant="outline"
                onClick={() => openPdfModal("/docs/rainjo_initial_design.pdf", "레인조 - 디자인 초안")}
              >
                디자인 초안 보기
              </Button>
              <Button variant="outline" onClick={() => openPdfModal("/docs/rainjo_revision.pdf", "레인조 - 수정 문서")}>
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

      {/* PDF 모달 */}
      <Dialog open={isPdfModalOpen} onOpenChange={setIsPdfModalOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-4">
          {currentPdf && <PDFViewer pdfPath={currentPdf.path} title={currentPdf.title} />}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default SideProjectSection;
