import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";

const Container = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #bdc3c7;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #ff731d;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #ff731d;
    margin-bottom: 20px;
    text-decoration: none;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  & {
    visibility: hidden;
  }

  @media (max-width: 720px) {
    & {
      visibility: visible;
    }
  }
`;

export default function Hambuger() {
  const [state, setState] = useState(false);
  function handleStateChange(stat) {
    console.log("change");
    setState(stat.isOpen);
  }

  return (
    <Container>
      <Menu
        width={280}
        isOpen={state}
        onStateChange={(stat) => handleStateChange(stat)}
      >
        {menuData.map((data) => (
          <a
            className="menu-item"
            href={data.href}
            key={data.name}
            onClick={() => {
              setState(false);
            }}
          >
            {data.name}
          </a>
        ))}
      </Menu>
    </Container>
  );
}

const menuData = [
  { href: "#introduce", name: "Home" },
  { href: "#aboutMe", name: "AboutMe" },
  { href: "#detail", name: "Detail" },
  { href: "#project", name: "Project" },
];
