// import { Face } from "kalidokit";
import { FaceMesh, FACEMESH_TESSELATION } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import React, { useState, useRef, useEffect, memo } from "react";
import { drawLandmarks, drawConnectors } from "@mediapipe/drawing_utils";
import "./index.less";
import { Button, Space } from "antd";
import classnames from "classnames";

const CameraInstance = (props: { 
  inputVideoRef: React.MutableRefObject<HTMLVideoElement> 
  faceMeshRef: React.MutableRefObject<FaceMesh>
  cameraOn: boolean
  showCameraView: boolean
}) => {
    const { inputVideoRef, faceMeshRef, cameraOn, showCameraView } = props;
    const camera = useRef<Camera>();

    useEffect(() => {
      if (!inputVideoRef.current) return;

      camera.current = new Camera(
        inputVideoRef.current, {
          onFrame: async () => {
            if (!faceMeshRef?.current) return;
            await faceMeshRef.current.send({ image: inputVideoRef.current as any });
          },
          width: 320,
          height: 240,
        }
      )
    }, []);

    useEffect(() => {
      if (cameraOn === true) {
        camera.current?.start();
      } else {
        camera.current?.stop();
      }
    }, [cameraOn])

    return (
      <video
        className={classnames(["input-video", !showCameraView && "video-hidden"])}
        ref={inputVideoRef}
        width="320px"
        height="240px"
      />
    );
};

const PreviewCamera = () => {
  const inputVideoRef = useRef<HTMLVideoElement>();
  const outputCanvasRef = useRef<any>();

  const [cameraOn, setCameraOn] = useState(false);
  const [showCameraView, setShowCameraView] = useState(true);

  const facemesh = useRef<FaceMesh>();

  useEffect(() => {
    facemesh.current = new FaceMesh({
      locateFile: (path: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${path}`,
    })

    facemesh.current.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    facemesh.current?.onResults(onResults);
  }, [])

  const onResults = (results: any) => {
    drawResults(results.multiFaceLandmarks[0]);
  };


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
      <section className="camera-wrapper">
        <CameraInstance 
          inputVideoRef={inputVideoRef}
          faceMeshRef={facemesh}
          cameraOn={cameraOn}
          showCameraView={showCameraView}
        />
        <canvas className="output-canvas" ref={outputCanvasRef} />
      </section>
      <section>
        <Space>
          <Button type="primary" onClick={() => setCameraOn(!cameraOn)}>
            {!cameraOn ? "开启" : "终止"} 捕捉
          </Button>
          <Button onClick={() => setShowCameraView(!showCameraView)}>
            {!cameraOn ? "开启" : "隐藏"} 摄像视图
          </Button>
        </Space>
      </section>
    </section>
  );
};

export default PreviewCamera;
