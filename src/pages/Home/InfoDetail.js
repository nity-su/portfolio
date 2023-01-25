import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Model } from "../../asset/glbs/MyModel.jsx";
import ProgressBar from "../../components/ui/progressBar/ProgressBar.js";

const Container = styled.div`
  display: flex;

  width: 60%;
  max-width: 1024px;
  height: 720px;
`;

const LeftContents = styled.div`
  width: 40%;
  height: 50%;
`;

const RightContents = styled.div`
  width: 60%;
`;
const WrapperMBTI = styled.div``;

export default function InfoDetail() {
  return (
    <Container>
      <LeftContents>
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </LeftContents>
      <RightContents>
        {data.map((info, index) => {
          return <ProgressBar info={info} key={index} />;
        })}
        <WrapperMBTI></WrapperMBTI>
      </RightContents>
    </Container>
  );
}
const data = [
  { name: "HTML", backgroundColor: "#6CE700", percentage: "72" },
  { name: "CSS", backgroundColor: "#30B0F1", percentage: "50" },
  { name: "Javascript", backgroundColor: "#F1E830", percentage: "80" },
];
