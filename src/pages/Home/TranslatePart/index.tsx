import OverLapImg from "@/components/OverlapImg";
import { prodIntroduction } from "../../../constants";
import img1 from "@/assets/home/frame32.png";
import img2 from "@/assets/home/frame33.png";
import "./index.scss";
import ProductionDetail from "@/components/ProductDetail";

function TranslatePart() {
  return (
    <div className="container">
      <div className="translate-part">
        <div className="col">
          <ProductionDetail
            title={prodIntroduction[2].name}
            description={prodIntroduction[2].description}
          />
        </div>
        <div className="col">
          <OverLapImg imgList={[img1, img2]} />
        </div>
      </div>
    </div>
  );
}

export default TranslatePart;
