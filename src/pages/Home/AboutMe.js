import React from "react";
import styled from "styled-components";
import * as colors from "../../styles/colors";
import profile from "../../asset/images/subin.jpg";
import ReactNotion from "../../components/feature/Notion";

const Container = styled.div`
  width: 60%;
  max-width: 900px;
  background-color: ${colors.bgPrimary};
  margin-top: 30vh;
  margin-bottom: 40vh;
  @media (max-width: 780px) {
    width: 100%;
    padding-left: 0px;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 32px;
  @media (max-width: 780px) {
    width: 100%;
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
  @media (max-width: 780px) {
    padding: 0px 8px;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 24px;
  @media (max-width: 780px) {
    margin-right: 0px;
  }
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
  @media (max-width: 780px) {
    padding-left: 8px;
  }
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
    @media (max-width: 780px) {
      padding-left: 8px;
    }
  }
`;

export default function AboutMe() {
  return (
    <Container>
      <TextTitle>
        <span>01. </span>AboutMe
      </TextTitle>
      <ContentsWrapper>
        <LeftWrapper>
          <TextDescription></TextDescription>
          <ReactNotion />
          <SkillTitle>최근에 학습한 스킬.</SkillTitle>
          <SkillSetGrid>
            {tempJson.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </SkillSetGrid>
        </LeftWrapper>
        <PhotoID src={profile} />
      </ContentsWrapper>
    </Container>
  );
}

const tempJson = [
  "Javascript",
  "Node.js",
  "Express.js",
  "solidity",
  "Hardhat & truffle",
];
