import CorpusPart from "./CorpusPart";
import TranslatePart from "./TranslatePart";
import { prodIntroduction } from "@/constants/index";
import FeatureList from "@/components/FeatureList";
import ProductionHeader from "@/components/ProductHeader";
import { ProdIntroductionType } from "@/types/index";

import wave1 from "@/assets/writingAssistant/wave1.svg";
import icon1 from "@/assets/writingAssistant/icon1.svg";
import icon2 from "@/assets/writingAssistant/icon2.svg";
import icon3 from "@/assets/writingAssistant/icon3.svg";
import icon4 from "@/assets/writingAssistant/icon4.svg";
import "@/assets/writingAssistant/icon.svg";
import "./index.scss";

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

function PageHeader(props: any) {
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

export default function WritingAssistant() {
  return (
    <section className="product-page">
      <section className="product-header">
        <PageHeader prodInfo={prodIntroduction[0]} />
        <img className="wave1" src={wave1}></img>
      </section>
      <section className="content">
        <FeatureList featList={prodIntroduction[0].featureList} />
        <CorpusPart featInfo={prodIntroduction[0].featureList[0]} />
        <TranslatePart featInfo={prodIntroduction[0].featureList[1]} />
      </section>
    </section>
  );
}
