import PropTypes from "prop-types";
import "./index.less";

function ProductionHeader(props: any) {
  const { title, description }: { title: string; description: string } = props;

  return (
    <div className="prod-header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default ProductionHeader;

ProductionHeader.propType = {
  title: PropTypes.string,
  description: PropTypes.array,
};
