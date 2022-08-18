import ProductionHeader from "@/components/ProductHeader";
import "@/assets/home/icon.svg";
import iconSprite from "@/assets/home/icon.svg";
import { ProdAdvantage, ProdIntroductionType } from "@/types/index";
import "./index.scss";

function AdvantageItem(props: any) {
  const { icon, label }: ProdAdvantage = props;
  return (
    <div className="feat-item">
      <div className="icon-wrapper">
        <svg>
          <use xlinkHref={iconSprite + icon}></use>
        </svg>
      </div>
      <div className="label-wrapper">
        <label>{label}</label>
      </div>
    </div>
  );
}

function WritingAssistant(props: any) {
  const { prodInfo }: { prodInfo: ProdIntroductionType } = props;
  return (
    <div className="container">
      <div className="writing-assistant">
        <div className="col">
          <ProductionHeader
            title={prodInfo.name}
            description={prodInfo.description}
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
            {prodInfo.advantages.map((item) => (
              <AdvantageItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingAssistant;
