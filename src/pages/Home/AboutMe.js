import React from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors";
import * as pixel from "../../styles/pixel";
import profile from "../../asset/images/subin.jpg";

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
  margin-top: 32px;
  @media (max-width: 780px) {
    width: 85%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const TextTitle = styled.div`
  color: ${colors.textPrimary};
  font-weight: 700;
  font-size: 2rem;
  span {
    font-size: 1.7rem;
  }
`;
const TextDescription = styled.span`
  color: ${colors.textPrimary};
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 24px;
`;
const PhotoID = styled.img`
  max-width: 300px;
  max-height: 300px;
  width: 25%;
  height: 25%;
  border: black 2px dotted;
  border-radius: 120px;
`;

const SkillTitle = styled.div`
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  margin-top: 24px;
`;

const SkillSetGrid = styled.div`
  display: grid;
  width: 100%;
  margin-top: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 8px;
  li {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
  }
`;

export default function AboutMe() {
  return (
    <>
      <Container>
        <TextTitle>
          <span>01. </span>AboutMe
        </TextTitle>
        <ContentsWrapper>
          <LeftWrapper>
            <TextDescription>
              프론트엔드 개발자 안수빈입니다. 블록체인에 호기심이 생겼고 개인
              금융, NFT 자산화 등 웹 3.0이란 미래에 이끌려 최근에는 LikeLion
              BlockChain School 등록하여 4개월간 blockChain을 학습했습니다. 해당
              과정에서 solidity와 웹 3.0 지식을 익혔고 프론트 엔드 프레임워크
              React를 배웠습니다. 현재는 배웠던 과정을 토대로, 프로젝트를 하면서
              정리해두었던 기록을 블로그에 올리고 있습니다.
            </TextDescription>
            <SkillTitle>최근에 읻혔던 스킬.</SkillTitle>
            <SkillSetGrid>
              {tempJson.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </SkillSetGrid>
          </LeftWrapper>
          <PhotoID src={profile} />
        </ContentsWrapper>
      </Container>
    </>
  );
}

const tempJson = [
  "Javascript",
  "Node.js",
  "Express.js",
  "solidity",
  "Hardhat & truffle",
];
