import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WritingAssistant from "./pages/WritingAssistant";
import Home from "./pages/Home";
import "./index.scss";
import "antd/dist/antd.css";
import Demo from "./pages/Demo";
import TranslateDemo from "./pages/Demo/TranslateDemo";
import CorpusDemo from "./pages/Demo/CorpusDemo";
import PageNotFound from "./pages/PageNotFound";
import WritingAssistant from "./pages/WritingAssistant";

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
          <Route path="product">
            <Route
              path="writing-assistant"
              element={<WritingAssistant />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
