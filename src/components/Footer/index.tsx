import "./index.less";
import wave3 from "@/assets/writingAssistant/wave3.svg";
import { useLocation } from "umi";
import { CSSProperties, useEffect, useState } from "react";

function Footer() {
  const location = useLocation();
  const [footerStyle, setFooterStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (location.pathname === "/") setFooterStyle({ display: "none" });
    else {
      setFooterStyle({});
    }
  }, [location.pathname]);
  return (
    <footer className="footer" style={footerStyle}>
      <img src={wave3} className="img-wave3" />
    </footer>
  );
}
export default Footer;
