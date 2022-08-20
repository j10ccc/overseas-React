import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./app.scss";
import { useEffect } from "react";
import { scrollToTop } from "./utils";

function App() {
  const a = 1;
  a = 2;
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
