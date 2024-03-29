import wave1 from "@/assets/writingAssistant/wave1.svg";
import { Outlet, useLocation } from "umi";
import "./index.less";

function Demo() {
  const location = useLocation();
  const { demoTitle } = location.state as any;
  console.log(location);

  return (
    <main className="demo-page">
      <div className="demo-header">
        <div className="container">
          <div className="demo-title">
            <h1>欢迎您使用SoSpeak</h1>
            <h1>{demoTitle}</h1>
          </div>
        </div>
        <img className="wave1" src={wave1}></img>
      </div>
      <div className="demo-content">
        <div className="demo-content-title">
          <h1>功能体验区</h1>
          <span className="demo-content-title-split"></span>
        </div>
        <Outlet />
      </div>
    </main>
  );
}
export default Demo;
