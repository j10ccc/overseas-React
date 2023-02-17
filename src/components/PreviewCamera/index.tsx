// import { Face } from "kalidokit";
import { FaceMesh, FACEMESH_TESSELATION } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import React, { useState, useRef, useEffect, memo } from "react";
import { drawLandmarks, drawConnectors } from "@mediapipe/drawing_utils";
import "./index.less";

const CameraInstance = memo(
  (props: { inputVideoRef: React.MutableRefObject<HTMLVideoElement> }) => {
    const { inputVideoRef } = props;
    let camera: Camera;
    useEffect(() => {
      if (!inputVideoRef.current) return;
      camera = new Camera(inputVideoRef.current, {
        onFrame: async () => {
          await facemesh.send({ image: inputVideoRef.current as any });
        },
        width: 320,
        height: 240,
      });

      // 打开摄像头需要 SSL
      // 开发环境下 localhost
      camera
        .start()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
      <video
        className="input-video"
        ref={inputVideoRef}
        width="320px"
        height="240px"
      ></video>
    );
  }
);

const PreviewCamera = () => {
  const inputVideoRef = useRef<HTMLVideoElement>();
  const outputCanvasRef = useRef<any>();

  // const [cameraOn, setCameraOn] = useState(false);
  const cameraOn = useRef(false);

  const facemesh = new FaceMesh({
    locateFile: (path: string) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${path}`,
  });

  facemesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  const onResults = (results: any) => {
    drawResults(results.multiFaceLandmarks[0]);
  };

  facemesh.onResults(onResults);

  const drawResults = (points: any) => {
    if (!outputCanvasRef.current || !inputVideoRef.current || !points) return;
    console.log();
    outputCanvasRef.current.width = inputVideoRef.current.videoWidth;
    outputCanvasRef.current.height = inputVideoRef.current.videoHeight;
    let canvasCtx = outputCanvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      outputCanvasRef.current.width,
      outputCanvasRef.current.height
    );
    // Use `Mediapipe` drawing functions
    drawConnectors(canvasCtx, points, FACEMESH_TESSELATION, {
      color: "#C0C0C070",
      lineWidth: 1,
    });
    if (points && points.length === 478) {
      //draw pupils
      drawLandmarks(canvasCtx, [points[468], points[468 + 5]], {
        color: "#ffe603",
        lineWidth: 2,
      });
    }
  };

  return (
    <section className="preview-camera">
      <CameraInstance inputVideoRef={inputVideoRef} />
      <canvas className="output-canvas" ref={outputCanvasRef}></canvas>
      <div>
        <button onClick={() => (cameraOn.current = !cameraOn)}>
          {!cameraOn ? "Start" : "Stop"} Camera
        </button>
      </div>
    </section>
  );
};

export default PreviewCamera;
