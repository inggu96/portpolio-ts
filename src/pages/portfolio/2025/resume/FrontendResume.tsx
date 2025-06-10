import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/common/ui/card";
import { Badge } from "@/components/common/ui/badge";
import { Separator } from "@/components/common/ui/separator";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";

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
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Professional Summary</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>
                  <strong className="text-blue-600">프론트엔드 전문성:</strong> Next.js와 React를 기반으로 현대적인 웹
                  애플리케이션을 개발하며, TypeScript와 Tailwind CSS를 활용한 타입 안전하고 반응형 UI 구현에 능숙합니다.
                </p>
                <p>
                  <strong className="text-blue-600">사용자 중심 개발:</strong> 사용자 관점에서 지속적으로 문제점을
                  발견하고 개선해 나가며, UI/UX 디자인부터 프론트엔드 구현까지 전 과정을 담당하여 일관성 있는 사용자
                  경험을 제공합니다.
                </p>
                <p>
                  <strong className="text-blue-600">협업 및 소통:</strong> 군 간부와 인력 소장 경험에서 얻은 리더십을
                  바탕으로 팀원들과 적극적으로 소통하며, 효율적인 커뮤니케이션을 통해 프로젝트를 성공적으로 완수하고
                  있습니다.
                </p>
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

        {/* Current Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Current Position</h3>

              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">디엠스튜디오 O2O사업부</h4>
                    <p className="text-lg font-semibold text-blue-600">Full Stack Engineer</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    2024.03 ~ Present
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">💻 완도 웨어러블 백오피스 구축</h5>
                    <ul className="ml-4 space-y-1 text-gray-700">
                      <li>• 웨어러블 디바이스 데이터 처리 및 관리 시스템 개발</li>
                      <li>• 실시간 데이터 동기화 및 백오피스 관리자 인터페이스 구축</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">🏢 벡스코 가상화 프로젝트</h5>
                    <ul className="ml-4 space-y-1 text-gray-700">
                      <li>• 관리자 대시보드를 통한 실시간 3D 공간 데이터 관리 시스템 구축</li>
                      <li>• 3D 가상 공간 데이터 처리 및 실시간 업데이트 기능 개발</li>
                      <li>• 관리자 인터페이스 및 데이터 시각화 구현</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">🏆 이박스 AR 웹 시스템 백오피스 구축</h5>
                    <p className="mb-2 text-sm text-gray-600">24년도 경제진흥원 아이디어 지원화 사업 1등 달성</p>
                    <ul className="ml-4 space-y-1 text-gray-700">
                      <li>• AR 어플리케이션과 웹 시스템 실시간 연동 구현 및 어플대응 API 제작</li>
                      <li>• 실시간 데이터 동기화 및 백오피스 관리자 인터페이스 구축</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">💻 기타 개발 업무</h5>
                    <ul className="ml-4 space-y-1 text-gray-700">
                      <li>• 그누보드5 기반 웹사이트 풀스택 개발</li>
                      <li>• UI/UX 디자인 및 프론트엔드 개발</li>
                      <li>• PHP 백엔드 개발 및 유지보수</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Side Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Side Projects</h3>

              {/* Mogotsu Project */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Mogotsu (もごつ)</h4>
                    <p className="text-lg font-semibold text-blue-600">K-POP 패션/굿즈 일본직구 커머스 플랫폼</p>
                    <p className="text-sm text-gray-600">Full Stack Engineer (팀 프로젝트 - 프론트엔드 리드)</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    2024.06 ~ Present
                  </Badge>
                </div>

                <p className="mb-4 text-gray-700">
                  일본 K-POP 팬들을 위한 패션/굿즈 직구 플랫폼으로,
                  <strong className="text-blue-600">
                    기획부터 디자인, 프론트엔드/초기 백엔드를 담당하며 이후 백엔드 개발자와 협업
                  </strong>
                </p>

                <div className="grid gap-4 mb-4 md:grid-cols-2">
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">🎨 기획 & 디자인</h5>
                    <ul className="ml-4 space-y-1 text-sm text-gray-700">
                      <li>• 상품기획팀(2명)과 협업하여 서비스 기획 및 사용자 경험 설계</li>
                      <li>• UI/UX 디자인 및 브랜딩 전담</li>
                      <li>• 반응형 웹 디자인 구현</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">💻 프론트엔드 개발</h5>
                    <ul className="ml-4 space-y-1 text-sm text-gray-700">
                      <li>• Next.js 14, TypeScript 기반 개발 전담</li>
                      <li>• Tailwind CSS 컴포넌트 시스템 구축</li>
                      <li>• SWR을 활용한 데이터 페칭 최적화</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">⚙️ 백엔드 개발 및 협업</h5>
                    <ul className="ml-4 space-y-1 text-sm text-gray-700">
                      <li>• Nest.js, Prisma를 사용한 기본 CRUD REST API 설계 및 초기 개발</li>
                      <li>• Jira, Figma를 통한 기능 문서화 및 API 개발 회의</li>
                      <li>• 백엔드 개발자와 API 스펙 정의 및 협업</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800">🚀 인프라 & DevOps</h5>
                    <ul className="ml-4 space-y-1 text-sm text-gray-700">
                      <li>• 프론트엔드: GitHub - Vercel CI/CD 구축</li>
                      <li>• 백엔드: GitHub - Jenkins CI/CD 환경 설정</li>
                      <li>• NCP 서버 환경 구축 및 도메인 관리</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 mb-4 border-l-4 border-blue-500 rounded-lg bg-blue-50">
                  <h5 className="mb-2 font-semibold text-gray-800">📊 지속적인 서비스 개선 (2024.12 MVP 출시 이후)</h5>
                  <ul className="ml-4 space-y-1 text-sm text-gray-700">
                    <li>
                      • <strong>2025.02 1차 개선:</strong> Vercel Analytics & Google Analytics 데이터 분석을 통한 사용자
                      전환율 및 체류시간 개선
                    </li>
                    <li>
                      • <strong>2025.04 UI 전면 재개선:</strong> 사용자 피드백 반영한 인터페이스 전면 리뉴얼
                    </li>
                    <li>• 지속적인 성능 모니터링 및 사용자 경험 최적화</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Next.js 14
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Nest.js
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Prisma
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    SWR
                  </Badge>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Rainjo Project */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">레인조 라이딩스쿨</h4>
                    <p className="text-lg font-semibold text-blue-600">라이딩스쿨 웹사이트 리뉴얼</p>
                    <p className="text-sm text-gray-600">Fullstack Developer (외주 프로젝트)</p>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    2025.01 (10일)
                  </Badge>
                </div>
                <p className="mb-3 text-gray-700">
                  기존 Laravel 기반 웹사이트의 메인페이지 및 일부 API 리뉴얼 프로젝트
                </p>
                <ul className="mb-3 ml-4 space-y-1 text-gray-700">
                  <li>• 메인페이지 전체 UI 리뉴얼</li>
                  <li>• 공지사항 및 교육과정 API 연동</li>
                  <li>• 교육일정 예약시스템 지역, 레벨 스키마 추가 및 필터 구현</li>
                  <li>• 교육일정 모바일 UI 구현</li>
                  <li>• 효율적인 커뮤니케이션으로 10일 내 프로젝트 완료</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Responsive Design
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education & Other Experience */}
        <div className="grid gap-6 mb-12 md:grid-cols-2">
          {/* Education */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Code States ABC-Lab</h4>
                    <p className="text-sm text-gray-600">Web Frontend 심화 과정</p>
                    <p className="text-xs text-gray-500">2023.01 ~ 2023.04</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900">SBS Academy</h4>
                    <p className="text-sm text-gray-600">Web Publishing 과정</p>
                    <p className="text-xs text-gray-500">2019.06 ~ 2019.11</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Other Experience & Key Achievements */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Key Achievements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">🎯 사용자 경험 개선</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Mogotsu 플랫폼 사용자 유입량 지속적 증가</li>
                      <li>• 레인조 프로젝트 모바일 사용성 대폭 개선</li>
                      <li>• 반응형 디자인으로 다양한 디바이스 지원</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">⚡ 개발 효율성</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• TypeScript 도입으로 코드 안정성 향상</li>
                      <li>• 컴포넌트 재사용성을 고려한 설계</li>
                      <li>• 효율적인 상태 관리 및 데이터 페칭</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">📈 기타 경험</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• 일가자인력: 랜딩페이지 퍼블리싱, SEO</li>
                      <li>• 굿모닝교육원: 웹사이트 기획 및 마케팅</li>
                      <li>• 공군부사관: 체계적인 업무 프로세스 관리</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-500"
        >
          <p className="mb-2">
            현재 디엠스튜디오에서 프론트엔드 개발을 담당하고 있으며, 사용자 중심의 인터페이스 구현에 집중하고 있습니다.
          </p>
          <p>
            개인 프로젝트인 모고츠 플랫폼을 통해 지속적으로 최신 프론트엔드 기술을 학습하고 적용하며 성장하고 있습니다.
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default FrontendResume;
