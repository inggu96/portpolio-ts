import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { DialogHeader, DialogTitle } from "@/components/common/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "./common/ui/button";

// PDF.js 워커 설정 - 최신 방식 사용
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// PDF 옵션 설정 (컴포넌트 외부에 정의)
const pdfOptions = {
  cMapUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  standardFontDataUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

interface PDFViewerProps {
  pdfPath: string;
  title: string;
}

const PDFViewer = ({ pdfPath, title }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [preloadedPages, setPreloadedPages] = useState<Set<number>>(new Set([1]));

  function onDocumentLoadSuccess(pdf: any): void {
    setNumPages(pdf.numPages);
    setPageNumber(1);
    setPdfDocument(pdf);
    setIsPageLoading(false);

    // 첫 페이지와 다음 페이지 미리 로드
    const pagesToPreload = new Set<number>([1]);
    if (pdf.numPages > 1) pagesToPreload.add(2);
    setPreloadedPages(pagesToPreload);
  }

  // 페이지 변경 시 다음/이전 페이지 미리 로드
  useEffect(() => {
    if (!pdfDocument) return;

    const newPreloadedPages = new Set(preloadedPages);
    newPreloadedPages.add(pageNumber);

    // 다음 페이지 미리 로드
    if (pageNumber < numPages!) {
      newPreloadedPages.add(pageNumber + 1);
    }

    // 이전 페이지 미리 로드
    if (pageNumber > 1) {
      newPreloadedPages.add(pageNumber - 1);
    }

    setPreloadedPages(newPreloadedPages);
  }, [pageNumber, pdfDocument]);

  function changePage(offset: number): void {
    setIsPageLoading(true);
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      if (numPages === null) return prevPageNumber;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  }

  function zoomIn(): void {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0));
  }

  function zoomOut(): void {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  }

  function onPageLoadSuccess(): void {
    setIsPageLoading(false);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <DialogHeader className="mb-4 w-full">
        <div className="flex justify-between items-center">
          <DialogTitle>{title}</DialogTitle>
        </div>
      </DialogHeader>

      <div className="border rounded-md p-2 bg-white overflow-auto max-h-[70vh] w-full flex justify-center relative">
        {isPageLoading && (
          <div className="flex absolute inset-0 z-10 justify-center items-center bg-white bg-opacity-70">
            <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
          </div>
        )}

        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          options={pdfOptions}
          loading={<div className="py-10 text-center">문서를 불러오는 중...</div>}
          error={<div className="py-10 text-center text-red-500">문서를 불러오는데 실패했습니다.</div>}
          className="flex justify-center"
        >
          {/* 현재 페이지 */}
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={scale}
            width={Math.min(window.innerWidth * 0.8, 800)}
            className="max-w-full"
            onLoadSuccess={onPageLoadSuccess}
            onRenderSuccess={onPageLoadSuccess}
          />

          {/* 미리 로드할 페이지들 (화면에 보이지 않음) */}
          {Array.from(preloadedPages)
            .filter((p) => p !== pageNumber)
            .map((pageNum) => (
              <Page
                key={`preload_page_${pageNum}`}
                pageNumber={pageNum}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                scale={scale}
                width={Math.min(window.innerWidth * 0.8, 800)}
                className="hidden max-w-full"
              />
            ))}
        </Document>
      </div>

      <div className="flex justify-between items-center mt-4 w-full">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
            <ChevronLeft size={16} />
            이전
          </Button>

          <Button variant="outline" size="sm" onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)}>
            다음
            <ChevronRight size={16} />
          </Button>
        </div>

        <div className="text-sm">
          {pageNumber} / {numPages || "-"}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={zoomOut}>
            <ZoomOut size={16} />
          </Button>
          <Button variant="outline" size="sm" onClick={zoomIn}>
            <ZoomIn size={16} />
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <Button variant="outline" onClick={() => window.open(pdfPath, "_blank")}>
          새 탭에서 열기
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
