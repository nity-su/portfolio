import React, { Suspense, useRef, useState } from "react";
import * as colors from "../../styles/colors";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Model } from "../../asset/glbs/MyModel.jsx";
import ProgressBar from "../../components/ui/progressBar/ProgressBar.js";
import {
  availablePrograming,
  coolTimeProgramming,
} from "../../asset/images/programmingIcons.js";
import useVisibleHook from "../../hooks/useVisibleHook";
import lock from "../../asset/images/lock.svg";

const Container = styled.div`
  width: 60%;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) =>
    props.isVisible
      ? "transition: opacity 1.5s ease-in-out"
      : ""}/* transition: opacity 1s ease-in-out; */
`;

const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 720px;
  @media (max-width: 720px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 30vh;
  }
`;

const Title = styled.div`
  color: ${colors.textPrimary};
  font-weight: 700;
  font-size: 2rem;
  padding-left: 2rem;
  span {
    font-size: 1.7rem;
  }

  &::before {
    content: "02.";
  }

  @media (max-width: 720px) {
    &::before {
      content: "02";
      display: block;
      margin-bottom: 4px;
    }

    padding-left: 0;
  }
`;

const LeftContents = styled.div`
  width: 50%;
  height: 60%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const RightContents = styled.div`
  width: 70%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
// 부모 측에서 한계를 설정하라
const WrapperSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 12px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
    grid-auto-rows: 4;
  }
`;
const GridCell = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Caution = styled.div`
  margin-top: 20px;
`;

export default function InfoDetail() {
  const arrayIcons = [...availablePrograming, ...coolTimeProgramming];
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useVisibleHook({ setIsVisible, isVisible, ref });
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //         setIsVisible(false);
  //         console.log("abc");
  //       }
  //       console.log("entry", isVisible);
  //       if (entry.isIntersecting) {
  //         console.log("observer");
  //         setIsVisible(true);
  //         // observer.disconnect();
  //       }
  //     });
  //   });
  //   observer.observe(ref.current);
  //   // observer.unobserve(ref.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <Container ref={ref} isVisible={isVisible}>
      <Title>Detail Skill</Title>
      <ContentsWrapper>
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
          </Canvas>
        </LeftContents>
        <RightContents>
          {data.map((info, index) => {
            return <ProgressBar info={info} key={index} />;
          })}
          <WrapperSkill>
            {arrayIcons.map((Icon, index) => {
              const isAvailable = index < availablePrograming.length;
              return (
                <GridCell key={index}>
                  <Icon size={80} opacity={isAvailable ? 1 : 0.4} />
                  {isAvailable ? null : (
                    <img
                      src={lock}
                      alt="lock.svg"
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        margin: "auto",
                      }}
                    />
                  )}
                </GridCell>
              );
            })}
          </WrapperSkill>
          <Caution>
            시계 표시는 기억이 흐릿하여 다시 배워야 함을 의미합니다.{" "}
          </Caution>
        </RightContents>
      </ContentsWrapper>
    </Container>
  );
}
const data = [
  { name: "HTML", backgroundColor: "#6CE700", percentage: "72" },
  { name: "CSS", backgroundColor: "#30B0F1", percentage: "50" },
  { name: "Javascript", backgroundColor: "#F1E830", percentage: "80" },
];
