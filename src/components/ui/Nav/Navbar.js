import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: end;
  margin-right: 25%;

  position: sticky;
  top: 0;
  width: 100vw;

  //버튼 hidden => 햄버거
  @media (max-width: 480px) {
    font-size: 14px;
    color: blue;
  }
`;

const Button = styled.button`
  width: 84px;
  height: 32px;
  margin-right: 12px;
`;

const LastButton = styled(Button)`
  margin-right: 10vw;
`;

export default function Navbar() {
  return (
    <Container>
      <Button>Introduce</Button>
      <Button>AboutMe</Button>
      <Button>DetailInfo</Button>
      <LastButton>Status</LastButton>
    </Container>
  );
}
