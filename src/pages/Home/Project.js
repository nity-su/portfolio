import React, { useRef, useState } from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors";
import konkrit from "../../asset/images/konkrit.png";
import metaMusic from "../../asset/images/meta-music.png";
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
    font-size: 1.2rem;
    font-weight: 700;
    z-index: 999;
    top: 50%;
    text-align: center;
  }

  & > img {
    width: 100%;
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
          <h1>NFT_MarketPlace 프로젝트</h1>
          <img src={metaMusic} alt="metaMusic" />
        </Cell>
        <Cell>
          <h1>clone Project konkirt Page</h1>
          <img src={konkrit} alt="konkrit" />
        </Cell>
      </ContentsGrid>
    </Container>
  );
}
