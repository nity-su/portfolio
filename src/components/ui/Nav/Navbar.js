import React, { useEffect } from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";

const Container = styled.nav`
  display: flex;
  justify-content: end;
  margin-top: 32px;
  position: sticky;
  top: 0;
  width: 100%;
  visibility: visible;
  background-color: ${colors.bgPrimary};
  z-index: 999999;
  //버튼 hidden => 햄버거
  @media (max-width: 720px) {
    visibility: hidden;
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
  & > a {
    color: ${colors.textPrimary};

    text-decoration: none;
  }
`;

const LastButton = styled(Button)`
  margin-right: 200px;
`;

export default function Navbar() {
  useEffect(() => {}, []);
  return (
    <Container>
      <Button>
        <a href="#introduce">
          <span>01</span> Introduce
        </a>
      </Button>
      <Button>
        <a href="#aboutMe">
          <span>02</span> AboutMe
        </a>
      </Button>
      <Button>
        <a href="#detail">
          <span>03</span> Detail
        </a>
      </Button>
      <LastButton>
        <a href="#project">
          <span>04</span> project
        </a>
      </LastButton>
    </Container>
  );
}
