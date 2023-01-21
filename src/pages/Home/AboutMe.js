import React from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors";
import * as pixel from "../../styles/pixel";

const Container = styled.div`
  width: 60%;
  max-width: 900px;
  background-color: ${colors.bgPrimary};
  @media (max-width: 780px) {
    width: 100%;
    margin-left: 24px;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: start;
  @media (max-width: 780px) {
    width: 85%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const TextTitle = styled.div``;
const TextDescription = styled.span`
  color: ${colors.textPrimary};
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const PhotoID = styled.img`
  max-width: 300px;
  max-height: 300px;
  width: 25%;
  height: 25%;
`;

const SkillSetGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

export default function AboutMe() {
  return (
    <>
      <Container>
        <TextTitle>01_AboutMe</TextTitle>
        <ContentsWrapper>
          <LeftWrapper>
            <TextDescription>
              프론트엔드 개발자 안수빈입니다. 블록체인에 호기심이 생겼고 개인
              금융, NFT 자산화 등 웹 3.0이란 미래에 이끌려 최근에는 LikeLion
              BlockChain School 4개월간 수강했습니다. 해당 과정에서 solidity와
              웹 3.0 지식을 익혔고 프론트 엔드 프레임워크 React를 배웠습니다.
              현재는 배웠던 과정을 토대로, 프로젝트를 하면서 따로 정리해두었던
              기록을 블로그에 올리고 있습니다.
            </TextDescription>
            <SkillSetGrid>
              {tempJson.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </SkillSetGrid>
          </LeftWrapper>
          <PhotoID src={process.env.PUBLIC_URL + "/logo192.png"} />
        </ContentsWrapper>
      </Container>
    </>
  );
}

const tempJson = ["javascript", "Node.js", "Express.js"];
