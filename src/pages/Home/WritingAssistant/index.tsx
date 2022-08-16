import ProductionHeader from "@/components/ProductHeader";
import { prodIntroduction } from "@/constants/index";
import "./index.scss";
import "@/assets/home/icon.svg";

import icon from "@/assets/home/icon.svg";
import wave1 from "@/assets/home/wave1.svg";

const featList = [
  {
    label: "权威语料库",
    iconId: "#1660619917679"
  },
  {
    label: "专业人才库",
    iconId: "#1660619945936"
  },
  {
    label: "双用户定位",
    iconId: "#1660619952414"
  },
  {
    label: "新众包模式",
    iconId: "#1660619959945"
  }
];

function FeatItem(props: any) {
  const { iconId, label }: { iconId: string; label: string } = props;
  return (
    <div className="feat-item">
      <div className="icon-wrapper">
        <svg>
          <use xlinkHref={icon + iconId}></use>
        </svg>
      </div>
      <div className="label-wrapper">
        <label>{label}</label>
      </div>
    </div>
  );
}

function WritingAssistant() {
  return (
    <div className="container">
      <div className="writing-assistant">
        <div className="col">
          <ProductionHeader
            title={prodIntroduction[0].name}
            description={prodIntroduction[0].description}
          />
          <div className="card">
            应用<mark>Language Tool（LT）</mark>
            搭载
            <mark>完整的专业术语语料库</mark>
            ，为商业文书提供专业的语言矫正服务。
          </div>
          <div className="card">
            利用<mark>大数据标签技术</mark>
            ，为高翻译要求用户提供<mark>个性化配置专业译员</mark>。
          </div>
        </div>
        <div className="col">
          <div className="feat-grid">
            {featList.map((item) => (
              <FeatItem key={item.label} {...item}></FeatItem>
            ))}
          </div>
        </div>
      </div>
      <img className="wave1" src={wave1}></img>
    </div>
  );
}

export default WritingAssistant;
