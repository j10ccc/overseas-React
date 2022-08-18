import { ProdFeature } from "@/types/index";
import iconSprite from "@/assets/home/icon.svg";
import "./index.scss";

function FeatureListItem(props: any) {
  const { label, icon }: { label: string; icon: string } = props;

  return (
    <div className="feature-list-item">
      <svg>
        <use xlinkHref={iconSprite + icon}></use>
      </svg>
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
        if (index === featList.length - 1)
          return <FeatureListItem label={item.alias} icon={item.icon} />;
        else
          return (
            <>
              <FeatureListItem label={item.alias} icon={item.icon} />
              <FeatureListSplit />
            </>
          );
      })}
    </div>
  );
}
export default FeatureList;
