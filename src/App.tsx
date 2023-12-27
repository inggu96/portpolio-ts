import { Route, Routes } from "react-router-dom";
import { HomeList } from "./pages/Home/HomeList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeList />} />
    </Routes>
  );
}
