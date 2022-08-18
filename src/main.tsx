import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.scss";
import "antd/dist/antd.css";
import Demo from "./pages/Demo";
import TranslateDemo from "./pages/Demo/TranslateDemo";
import CorpusDemo from "./pages/Demo/CorpusDemo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="demo" element={<Demo />}>
            <Route path="translate" element={<TranslateDemo />}></Route>
            <Route path="corpus" element={<CorpusDemo />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
