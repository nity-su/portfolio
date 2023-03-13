import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import * as colors from "../../styles/colors";
import { projects } from "../../data/projects";
import Carousel from "nuka-carousel";
import { GithubOriginal } from "devicons-react";

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
    height: 100%;
    object-fit: cover;
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

const AddrSite = styled.a`
  display: block;
  text-align: end;
  margin-left: 12px;
  color: whitesmoke;
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
        <a href={result.gitHub} target="_blank" rel="noreferrer">
          <GithubOriginal size={48} style={{ marginTop: "8px" }} />
        </a>
        <AddrSite href={result.link} target={result.link}>
          {result.link}
        </AddrSite>
      </Contents>
    </Container>
  );
}
