import ProductionHeader from "@/components/ProductHeader";
import "@/assets/home/icon.svg";
import { ProdIntroductionType } from "@/types/index";
import "./index.scss";

import icon1 from "@/assets/home/icon1.svg";
import icon2 from "@/assets/home/icon2.svg";
import icon3 from "@/assets/home/icon3.svg";
import icon4 from "@/assets/home/icon4.svg";

const iconList = [icon1, icon2, icon3, icon4];

function AdvantageItem(props: any) {
  const { label, index } = props;
  return (
    <div className="feat-item">
      <div className="icon-wrapper">
        <img src={iconList[index]} />
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
            {prodInfo.advantages.map((item, index) => (
              <AdvantageItem key={item.label} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingAssistant;
