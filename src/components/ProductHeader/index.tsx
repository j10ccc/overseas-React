import PropTypes from "prop-types";
import "./index.scss";

function ProductionHeader(props: any) {
  const { title, description }: { title: string; description: string[] } =
    props;

  return (
    <>
      <h1>{title}</h1>
      {description.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}
export default ProductionHeader;

ProductionHeader.propType = {
  title: PropTypes.string,
  description: PropTypes.array
};
