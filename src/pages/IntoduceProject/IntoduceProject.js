import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import * as colors from "../../styles/colors";
import nftMarketScreenShots from "../../asset/images/nft-marketplace-screenshot/index";
import Carousel from "nuka-carousel";

const Container = styled.div`
  background-color: ${colors.bgPrimary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  width: 32%;
  margin-bottom: 32px;
  img {
    width: 100%;
  }
`;

const Contents = styled.div`
  width: 40%;
  text-align: left;
  padding: 40px;
  background-color: ${colors.bgPrimary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #ddd;
`;
const Header = styled.div`
  & > title {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
  }
`;
const Body = styled.div`
  & > span {
    font-size: 16px;
    line-height: 1.5;
    color: #ddd;
    margin-bottom: 20px;
  }
`;
const Skill = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  & > span {
    font-size: 14px;
    background-color: #fff;
    color: #2e3c7e;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export default function IntroduceProject() {
  const { name } = useParams();
  console.log(name);
  const result = projects.find((data) => data.id === name);

  return (
    <Container>
      <CarouselWrapper>
        <Carousel>
          {result.images.map((url) => (
            <img src={url} alt={url} key={url} />
          ))}
        </Carousel>
      </CarouselWrapper>
      <Contents>
        <Header>
          <title>{result.title}</title>
        </Header>
        <Body>
          <span>{result.description}</span>
        </Body>
        <Skill>
          {result.skills.map((nameOfSkill) => (
            <span>{nameOfSkill}</span>
          ))}
        </Skill>
      </Contents>
    </Container>
  );
}

const projects = [
  {
    id: "nft-marketplace",
    title: "NFT-Marketplace",
    description: `블록체인 스쿨 최종 프로젝트로 진행한 결과물이며, NFT 마켓에서 요구하는 ERC-721 등록과 거래 기능을 구현했습니다. 
      또한 특정 프로필 이미지를 선택하여 NFT를 대표하는 로고를 넣도록 cloudinary를 활요한 업로드 기능을 추가했습니다.`,
    skills: ["mysql", "vercel", "truffle", "react", "cloudinary"],
    images: nftMarketScreenShots,
  },
  {
    id: "clone-project",
    title: "Clone Project",
    description:
      "clone 프로젝트이며 Flex와 Grid를 사용하여 반응형에 초점을 두고 개발했습니다.",
    skills: "react",
  },
  {
    id: "login-ex-project",
    title: "NextJs & TypeScript 활용한 로그인",
    description: "",
    skills: "NextJs, typescript,",
  },
];
