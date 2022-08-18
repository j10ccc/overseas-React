import { Button } from "antd";
import { serviceList } from "@/constants/index";
import { Link } from "react-router-dom";
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
          <Link to={item.route} className="service-list-item" key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="operate">
        <Button size="large" shape="round" type="primary" ghost>
          登录
        </Button>
        <Button className="trial-button" size="large" shape="round" ghost>
          免费试用
        </Button>
      </div>
    </nav>
  );
}
