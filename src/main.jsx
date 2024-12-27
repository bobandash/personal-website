import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { BrowserRouter, Routes, Route } from "react-router";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
