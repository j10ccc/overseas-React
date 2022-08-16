import "./index.scss";

function OverLapImg(props: any) {
  const [img1, img2] = props.imgList;

  return (
    <div className="overlap-img">
      <div className="img-wrapper">
        <img src={img1}></img>
      </div>
      <div className="img-wrapper">
        <img src={img2}></img>
      </div>
    </div>
  );
}
export default OverLapImg;
