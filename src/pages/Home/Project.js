import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../styles/colors";
import konkrit from "../../asset/images/konkrit.png";
import metaMusic from "../../asset/images/meta-music.png";
import loginExProject from "../../asset/images/loginex.jpeg";
import characterScreenShot from "../../asset/images/3d-project.png";
import useVisibleHook from "../../hooks/useVisibleHook";

const Container = styled.div`
  width: max(270px, 50%);
  margin-bottom: 320px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) => (props.isVisible ? "transition: opacity 1.5s ease-in-out" : "")};
  @media (max-width: 780px) {
    /* width: 100%;
    margin: 0px 12px;
    overflow: none; */
  }
`;
const ContentsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-template-rows: 3;
  gap: 24px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  min-width: 200px;

  & > h1 {
    width: 100%;
    color: #ff731d;
    margin-bottom: 8px;
    font-size: 100%;
    font-weight: 700;
    z-index: 999;
    top: 50%;
    text-align: center;
  }

  img {
    width: 100%;
    height: 180px;
    box-shadow: 12px 12px 10px 1px #212c5c;
  }
`;

export default function Project() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useVisibleHook({ setIsVisible, isVisible, ref });
  console.log(isVisible);
  return (
    <Container ref={ref} isVisible={isVisible}>
      <ContentsGrid>
        <Cell>
          <h1>3d-poject</h1>
          <Link to="/project/3d-project">
            <img src={characterScreenShot} alt="metaMusic" />
          </Link>
        </Cell>
        <Cell>
          <h1>NFT_MarketPlace 프로젝트</h1>
          <Link to="/project/nft-marketplace">
            <img src={metaMusic} alt="metaMusic" />
          </Link>
        </Cell>
        <Cell>
          <h1>clone Project konkirt Page</h1>
          <Link to="/project/konkrit">
            <img src={konkrit} alt="konkrit" />
          </Link>
        </Cell>
        <Cell>
          <h1>NextJs & TypeScript 활용한 로그인 </h1>
          <Link to="/project/login-ex-project">
            <img src={loginExProject} alt="login-ex" />
          </Link>
        </Cell>
      </ContentsGrid>
    </Container>
  );
}
