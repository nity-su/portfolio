import React from "react";
import styled from "styled-components";
import Navbar from "../../components/ui/Nav/Navbar";
import AboutMe from "./AboutMe";
import InfoDetail from "./InfoDetail";
import Introduce from "./Introduce";
import * as colors from "../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.bgPrimary};
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Introduce />
      <AboutMe />
      <InfoDetail />
    </Container>
  );
}
