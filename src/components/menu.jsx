import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div`
  a {
    color: #000;
  }

  ul {
    border-left: 1px solid #ddd;
    margin: 0 0 0 2rem;
    /* margin: 0 auto; */
    padding: 0;
    list-style-type: none;
  }

  /* Skip margin and border for first ul */
  > ul {
    margin-left: 0;
    border: 0;
  }

  li {
    width: 100%;
    font-size: 1.4rem;

    a {
      display: block;
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
    }

    &.header {
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
      font-weight: bold;
      color: #000;
    }

    &:hover {
      background: #ddd;
    }
    &.active {
      font-weight: bold;
      color: var(--primary-color);
      a {
        color: var(--primary-color);
      }
    }
  }
`;

const menu = [
  {
    link: "/quick-start",
    name: "Quick Start",
    menu: [
      {
        link: "/quick-start/setup",
        name: "Setup",
      },
      {
        link: "/quick-start/table-and-permissions",
        name: "Table and permissions",
      },
      {
        link: "/quick-start/app",
        name: "App",
      },
      {
        link: "/quick-start/add-authentication",
        name: "Add authentication",
      },
      {
        link: "/quick-start/deploy",
        name: "Deploy app",
      },
      {
        link: "/quick-start/whats-next",
        name: "What's next?",
      },
    ],
  },
  {
    link: "/hasura",
    name: "Hasura",
    menu: [
      {
        link: "/hasura/testar",
        name: "Testar Hasura",
      },
    ],
  },
];

export function Menu(props) {
  function renderMenu(menu) {
    if (!menu) return null;
    return (
      <ul>
        {menu.map((item) => {
          return (
            <React.Fragment key={item.Link}>
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
              {renderMenu(item.menu)}
            </React.Fragment>
          );
        })}
      </ul>
    );
  }

  return (
    <MenuContainer>
      <div>Documentation</div>
      {renderMenu(menu)}
    </MenuContainer>
  );
}
