import { Button } from "antd";
import { serviceList } from "@/constants/index";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./index.scss";

import logo from "@/assets/writingAssistant/logo.png";
import { CSSProperties, useEffect, useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [navStyle, setNavStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (location.pathname === "/") setNavStyle({ background: "none" });
    else {
      setNavStyle({
        background: "linear-gradient(140deg, #03ACF21A 1.6%, #4CAF501A 105%)"
      });
    }
  }, [location.pathname]);

  return (
    <nav className="nav" style={navStyle}>
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <div className="service-list">
        {serviceList.map((item) => (
          <NavLink
            to={item.route}
            className={({ isActive }) => {
              return `service-list-item ${
                isActive ? "service-list-item-active" : ""
              }`;
            }}
            key={item.name}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="operate">
        <Button shape="round" type="primary" ghost>
          登录
        </Button>
        <Button className="trial-button" type="primary" shape="round">
          免费试用
        </Button>
      </div>
    </nav>
  );
}
