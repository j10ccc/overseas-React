import OverLapImg from "@/components/OverlapImg";
import img1 from "@/assets/home/frame32.png";
import img2 from "@/assets/home/frame33.png";
import FeatureDetail from "@/components/FeatureDetail";
import { ProdFeature } from "@/types/index";
import "./index.scss";

function TranslatePart(props: any) {
  const { featInfo }: { featInfo: ProdFeature } = props;
  return (
    <div className="container">
      <div className="translate-part">
        <div className="col">
          <FeatureDetail
            title={featInfo.name}
            description={featInfo.description}
            demoRoute={featInfo.demoRoute}
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
