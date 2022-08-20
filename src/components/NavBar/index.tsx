import { Button } from "antd";
import { serviceList } from "@/constants/index";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

import logo from "@/assets/home/logo.png";

export default function NavBar(props: any) {
  return (
    <nav className="nav">
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
