import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Outlet, useLocation } from "umi";
import { useEffect } from "react";
import { scrollToTop } from "@/utils";
import "./index.less";
import "antd/dist/antd.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
