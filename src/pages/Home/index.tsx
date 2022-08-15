import ProductionHeader from "../../components/ProductHeader";
import { prodIntroduction } from "../../constants";
import "./index.scss";

function WritingPart() {
  return (
    <div className="container">
      <div className="col">
        <ProductionHeader
          title={prodIntroduction[0].name}
          description={prodIntroduction[0].description}
        />
      </div>
    </div>
  );
}

function TranslatePart() {
  return (
    <div className="container">
      <div className="col">
        <ProductionHeader
          title={prodIntroduction[1].name}
          description={prodIntroduction[1].description}
        />
      </div>
    </div>
  );
}

function CorpusPart() {
  return (
    <div className="container">
      <div className="col">
        <ProductionHeader
          title={prodIntroduction[2].name}
          description={prodIntroduction[2].description}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className="home-page">
      <WritingPart />
      <CorpusPart />
      <TranslatePart />
    </section>
  );
}
