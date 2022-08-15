import { Button } from "antd";
import { serviceList } from "../../constants";
import "./index.scss";

export default function NavBar() {
  return (
    <>
      <div className="logo">Sospeak</div>
      <div className="service-list">
        {serviceList.map((item) => (
          <div className="service-item" key={item.name}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="opearte">
        <Button>登录</Button>
        <Button>免费试用</Button>
      </div>
    </>
  );
}
