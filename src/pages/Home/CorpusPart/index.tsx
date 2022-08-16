import OverLapImg from "@/components/OverlapImg";
import ProductionDetail from "@/components/ProductDetail";
import { prodIntroduction } from "../../../constants";
import "./index.scss";

import img1 from "@/assets/home/frame34.png";
import img2 from "@/assets/home/frame35.png";

function CorpusPart() {
  return (
    <div className="container">
      <div className="corpus-part">
        <div className="col">
          <OverLapImg imgList={[img1, img2]} />
        </div>
        <div className="col">
          <ProductionDetail
            title={prodIntroduction[1].name}
            description={prodIntroduction[1].description}
          />
        </div>
      </div>
    </div>
  );
}
export default CorpusPart;
