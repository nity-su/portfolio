import React from "react";
import styled from "styled-components";
import * as color from "../../styles/colors.js";
import * as pixel from "../../styles/pixel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
  background-color: ${color.bgPrimary};

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
  color: ${color.textPrimary};
  font-size: 3rem;
`;

const TextSubTitle = styled.span`
  color: ${color.textPrimary};
  font-size: 2rem;
`;

const TextDescription = styled.span`
  color: ${color.textPrimary};
  font-size: 1rem;
`;

export default function Introduce() {
  const path = process.env.PUBLIC_URL + "/logo192.png";
  console.log(path);
  return (
    <Container>
      <TextWrapper>
        <TextTitle>Nity</TextTitle>
        <TextSubTitle>브론트 엔드& 블록체인</TextSubTitle>
        <TextDescription>
          프론트 엔드를 공부하면서 블록체인을 탐구하고 있는 개발자입니다.
        </TextDescription>
      </TextWrapper>
      <img src={path} alt="I dont know" />
    </Container>
  );
}
