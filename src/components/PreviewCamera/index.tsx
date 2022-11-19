// import { Face } from "kalidokit";
import { FaceMesh, FACEMESH_TESSELATION } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import { useState, useRef, useEffect } from "react";
import { drawLandmarks, drawConnectors } from "@mediapipe/drawing_utils";
import "./index.scss";

const PreviewCamera = () => {
  console.log(Camera);
  const inputVideoRef = useRef<any>();
  const outputCanvasRef = useRef<any>();

  const [inputVideo, setInputVideo] = useState(inputVideoRef.current);
  const [outputCanvas, setOutputCanvas] = useState(outputCanvasRef.current);
  const [cameraOn, setCameraOn] = useState(false);

  useEffect(() => {
    setInputVideo(inputVideoRef.current);
    console.log("*** video element changed! ***");
  }, [inputVideoRef]);

  useEffect(() => {
    setOutputCanvas(outputCanvasRef.current);
    console.log("*** canvas element changed! ***");
  }, [outputCanvasRef]);

  const camera = new Camera(inputVideo, {
    onFrame: async () => {
      await facemesh.send({ image: inputVideo });
    },
    width: 320,
    height: 240,
  });

  const handleSwicherClick = () => {
    if (cameraOn) camera.stop();
    else camera.start();
    console.log(cameraOn);
    setCameraOn(!cameraOn);
  };

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
    if (!outputCanvas || !inputVideo || !points) return;
    console.log();
    outputCanvas.width = inputVideo.videoWidth;
    outputCanvas.height = inputVideo.videoHeight;
    let canvasCtx = outputCanvas.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
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
      <video
        className="input-video"
        ref={inputVideoRef}
        width="320px"
        height="240px"
      ></video>
      <canvas className="output-canvas" ref={outputCanvasRef}></canvas>
      <div>
        <button onClick={handleSwicherClick}>
          {!cameraOn ? "Start" : "Stop"} Camera
        </button>
      </div>
    </section>
  );
};

export default PreviewCamera;
