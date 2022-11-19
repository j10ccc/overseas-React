import "./index.scss";
import headerImg from "@/assets/home/header.png";
import { Link } from "react-router-dom";

const data = [
  {
    alias: "BUSSINESS WRITING ASSISTANT",
    name: "商业文书写作助手",
    descriptions: ["超强大的语言矫正功能", "和个性化译员配置"],
    route: "/product/writing-assistant",
  },
  {
    alias: "NEW MEDIA CONTENT CREATION ASSISTANT",
    name: "新媒体内容创作助手",
    descriptions: ["超丰富的媒体资源分享检索", "和创新宣传片译制服务"],
    route: "/product/writing-assistant",
  },
  {
    alias: "VIRTUAL LIVE BROADCAST ASSISANT",
    name: "虚拟IP直播出海助手",
    descriptions: ["超生动的虚拟主播形象", "和实时同频翻译输出"],
    route: "/product/liveroom",
  },
];
function ProductCard(props: any) {
  const {
    alias,
    name,
    descriptions,
    route,
  }: { alias: string; name: string; descriptions: string[]; route: string } =
    props;
  return (
    <Link className="product-card" to={route}>
      <span>{alias}</span>
      <h1>{name}</h1>
      {descriptions.map((item) => (
        <span>{item} </span>
      ))}
    </Link>
  );
}
function Home() {
  return (
    <section className="home-page">
      <section className="home-header">
        <div className="container">
          <div className="home-description">
            <div className="col">
              <h1>SoSpeak</h1>
              <h2>中小企业品牌</h2>
              <h2>出海内容服务智能助手</h2>
              <div>INTELLIGENT SERVICE ASSITANT</div>
              <div>FOR SMALL AND MEDIUM-SIZED ENTERPRISES</div>
            </div>
            <div className="col">
              <img src={headerImg} />
            </div>
          </div>
        </div>
      </section>
      <div className="product-card-group-wrapper">
        <div className="product-card-group">
          {data.map((item) => (
            <ProductCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Home;
