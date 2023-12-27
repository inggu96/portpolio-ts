import { Route, Routes } from "react-router-dom";
import { HomeList } from "./pages/Home/HomeList";
import { Layout } from "./pages/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeList />} />
      <Route path="/layout" element={<Layout />} />
    </Routes>
  );
}
