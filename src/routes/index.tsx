import { HomeList } from "@src/pages/Home/HomeList";
import { createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";

const route = (
  <Routes>
    <Route path="/" element={<HomeList />} />
  </Routes>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
