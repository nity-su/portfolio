import React from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors.js";
import * as pixel from "../../styles/pixel";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 60%;
  height: 80vh;
  max-width: 900px;
  margin-bottom: 20vh;
  background-color: ${colors.bgPrimary};

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
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

const TextTitle = styled.span`
  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  font-size: 5rem;
  font-weight: 700;
`;

const TextSubTitle = styled.span`
  margin-top: 20px;
  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  font-size: 2rem;
  font-weight: 700;
`;

const TextDescription = styled.span`
  margin-top: 16px;
  color: ${colors.textPrimary};
  font-size: 1rem;
`;

export default function Introduce() {
  const path = process.env.PUBLIC_URL + "/logo192.png";
  console.log(path);
  return (
    <Container>
      <TextWrapper>
        <TextTitle>Nity</TextTitle>
        <TextSubTitle>프론트 엔드 & 블록체인</TextSubTitle>
        <TextDescription>
          프론트 엔드를 공부하면서 블록체인을 탐구하고 있는 개발자입니다.
        </TextDescription>
      </TextWrapper>
    </Container>
  );
}
