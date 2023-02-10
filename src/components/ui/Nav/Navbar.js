import React, { useEffect } from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";
import { HashLink } from "react-router-hash-link";

const Container = styled.nav`
  display: flex;
  justify-content: end;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${colors.bgPrimary};
  z-index: 999999;
  //버튼 hidden => 햄버거
  @media (max-width: 720px) {
    display: none;
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
        <HashLink to="/#introduce">
          <span>01</span> Introduce
        </HashLink>
      </Button>
      <Button>
        <HashLink to="/#aboutMe">
          <span>02</span> AboutMe
        </HashLink>
      </Button>
      <Button>
        <HashLink to="/#detail">
          <span>03</span> Detail
        </HashLink>
      </Button>
      <LastButton>
        <HashLink to="/#project">
          <span>04</span> project
        </HashLink>
      </LastButton>
    </Container>
  );
}
