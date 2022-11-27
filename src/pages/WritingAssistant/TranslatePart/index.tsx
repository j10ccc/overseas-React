import OverLapImg from "@/components/OverlapImg";
import img1 from "@/assets/writingAssistant/frame32.png";
import img2 from "@/assets/writingAssistant/frame33.png";
import FeatureDetail from "@/components/FeatureDetail";
import { ProdFeature } from "@/types/index";
import "./index.less";

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
