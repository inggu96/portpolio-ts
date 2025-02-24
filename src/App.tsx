import { Route, Routes } from "react-router-dom";
import { HomeList } from "./pages/Home/HomeList";
import { CareerHistory } from "./pages/CareerHistory/CareerHistory";
import { MogotsuDetail } from "./pages/MogotsuDetail/MogotsuDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeList />} />
      <Route path="/page" element={<CareerHistory />} />
      <Route path="/projects/mogotsu" element={<MogotsuDetail />} />
    </Routes>
  );
}
