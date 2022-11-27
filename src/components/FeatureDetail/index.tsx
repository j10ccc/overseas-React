import { Button } from "antd";
import PropTypes from "prop-types";
import { Link } from "umi";
import "./index.less";

function FeatureDetail(props: any) {
  const {
    title,
    description,
    demoRoute,
  }: { title: string; description: string[]; name: string; demoRoute: string } =
    props;

  return (
    <div className="feat-detail">
      <h1>{title}</h1>
      <div className="detail-split"></div>
      {description.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <Button
        size="large"
        type="primary"
        shape="round"
        style={{ backgroundColor: "#4CAF50", border: "none" }}
      >
        <Link to={demoRoute} state={{ demoTitle: title }}>
          免费试用
        </Link>
      </Button>
    </div>
  );
}
export default FeatureDetail;

FeatureDetail.propType = {
  title: PropTypes.string,
  description: PropTypes.array,
};
