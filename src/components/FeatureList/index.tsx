import { ProdFeature } from "@/types/index";
// import iconSprite from "@/assets/writingAssistant/icon.svg";
import "./index.less";

function FeatureListItem(props: any) {
  const { label, icon }: { label: string; icon: string } = props;

  return (
    <div className="feature-list-item">
      {/*       <svg>
        <use xlinkHref={iconSprite + icon}></use>
      </svg> */}
      <span>{label}</span>
    </div>
  );
}
function FeatureListSplit() {
  return <div className="feature-list-split"></div>;
}

function FeatureList(props: any) {
  const { featList }: { featList: ProdFeature[] } = props;
  return (
    <div className="feature-list">
      {featList.map((item, index) => {
        return (
          <>
            {index === featList.length - 1 ? (
              <FeatureListSplit key={`split${index}`} />
            ) : null}
            <FeatureListItem label={item.alias} icon={item.icon} key={index} />
          </>
        );
      })}
    </div>
  );
}
export default FeatureList;
