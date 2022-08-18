import OverLapImg from "@/components/OverlapImg";
import FeatureDetail from "@/components/FeatureDetail";
import { ProdFeature } from "@/types/index";
import img1 from "@/assets/home/frame34.png";
import img2 from "@/assets/home/frame35.png";
import "./index.scss";

function CorpusPart(props: any) {
  const { featInfo }: { featInfo: ProdFeature } = props;
  return (
    <div className="container">
      <div className="corpus-part">
        <div className="col">
          <OverLapImg imgList={[img1, img2]} />
        </div>
        <div className="col">
          <FeatureDetail
            title={featInfo.name}
            description={featInfo.description}
            demoRoute={featInfo.demoRoute}
          />
        </div>
      </div>
    </div>
  );
}
export default CorpusPart;
