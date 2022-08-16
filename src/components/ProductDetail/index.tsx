import PropTypes from "prop-types";
import "./index.scss";

function ProductionDetail(props: any) {
  const { title, description }: { title: string; description: string[] } =
    props;

  return (
    <div className="prod-detail">
      <h1>{title}</h1>
      <div className="detail-split"></div>
      {description.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
export default ProductionDetail;

ProductionDetail.propType = {
  title: PropTypes.string,
  description: PropTypes.array
};
