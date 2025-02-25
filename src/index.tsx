import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./css/globals.css";
import Router from "./router";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

const root = createRoot(rootElement);
if (!rootElement) {
  throw new Error("No root element found");
}

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
