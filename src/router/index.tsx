import { Route, Routes } from "react-router-dom";
import Portfolio2024 from "../pages/portfolio/2024";
import { CareerHistory } from "../pages/CareerHistory/CareerHistory";
import { MogotsuDetail } from "../pages/MogotsuDetail/MogotsuDetail";
import Portfolio2025 from "@/pages/portfolio/2025";
import MainLayout from "@/layouts/MainLayout";

const Router = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Portfolio2025 />} />
        <Route path="/portfolio/2024" element={<Portfolio2024 />} />
        <Route path="/portfolio/2025" element={<Portfolio2025 />} />
        <Route path="/career" element={<CareerHistory />} />
        <Route path="/projects/mogotsu" element={<MogotsuDetail />} />
      </Routes>
    </MainLayout>
  );
};

export default Router;
