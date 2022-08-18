import CorpusPart from "./CorpusPart";
import TranslatePart from "./TranslatePart";
import WritingAssistant from "./WritingAssistant";
import { prodIntroduction } from "@/constants/index";
import FeatureList from "@/components/FeatureList";
import wave1 from "@/assets/home/wave1.svg";
import "./index.scss";

export default function Home() {
  return (
    <section className="home-page">
      <section className="home-header">
        <WritingAssistant prodInfo={prodIntroduction[0]} />
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
