import React from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors.js";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 60%;
  height: 70vh;
  margin-top: 15vh;
  max-width: 900px;
  background-color: ${colors.bgPrimary};

  @media (max-width: 780px) {
  }
`;

const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 720px;

  /* @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
`;

const TextTitle = styled.p`
  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  font-size: 5rem;
  font-weight: 700;
`;

const TextSubTitle = styled.p`
  margin-top: 20px;
  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  font-size: 2rem;
  font-weight: 700;
`;

const TextDescription = styled.p`
  margin-top: 16px;
  color: ${colors.textPrimary};
  font-size: 1rem;
  p {
    margin-top: 0.8rem;
    line-height: 1.5rem;
  }
`;

export default function Introduce() {
  return (
    <Container>
      <TextWrapper>
        <TextTitle>Nity</TextTitle>
        <TextSubTitle>프론트 엔드 & 블록체인</TextSubTitle>
        <TextDescription>
          안녕하세요, 프론트엔드 개발자 Nity 입니다.
          <p>
            React, NextJs 뿐만이 아니라 프론트 엔드의 꽃이라 불리는 Three JS에도
            관심이 많습니다.
          </p>
          <p>
            최근에는 개인 금융, NFT 자산화 등 웹 3.0이란 미래에 이끌려 LikeLion
            BlockChain School 에서 4개월간 학습했습니다.
          </p>
        </TextDescription>
      </TextWrapper>
    </Container>
  );
}
