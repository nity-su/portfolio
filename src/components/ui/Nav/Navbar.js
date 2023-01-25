import React from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";

const Container = styled.nav`
  display: flex;
  justify-content: end;
  margin-top: 32px;
  position: sticky;
  top: 0;
  width: 100%;

  //버튼 hidden => 햄버거
  @media (max-width: 480px) {
    font-size: 14px;
    color: blue;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 32px;
  margin-right: 12px;
  background-color: transparent;
  color: ${colors.textPrimary};
  border: none;
  span {
    color: ${colors.textFocus};
  }
`;

const LastButton = styled(Button)`
  margin-right: 200px;
`;

export default function Navbar() {
  return (
    <Container>
      <Button>
        <span>01</span> Introduce
      </Button>
      <Button>
        <span>02</span> AboutMe
      </Button>
      <Button>
        <span>03</span> DetailInfo
      </Button>
      <LastButton>
        <span>04</span> Status
      </LastButton>
    </Container>
  );
}
