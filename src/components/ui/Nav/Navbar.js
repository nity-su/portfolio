import React from "react";
import styled from "styled-component";

const Container = styled.nav`
  width: 100%;

  @media (max-width: 480px) {
    font-size: 14px;
    color: blue;
  }
`;

export default function Navbar() {
  return <Container></Container>;
}
