import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div`
  a {
    color: #000;
  }

  .ul-start {
    /* background: green; */
    li {
      /* margin-left: -1rem; */
      /* background: red; */
    }
  }

  ul {
    border-left: 1px solid #ddd;
    margin-left: -1px;
  }

  /* Skip first ul */
  > ul {
    /* border: 0; */
    > li {
      font-weight: bold;
    }
  }

  li {
    width: 100%;
    font-size: 1.4rem;

    a {
      display: block;
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
    }

    &:hover {
      background: #ddd;
    }
    &.active {
    }
  }
`;

export function Menu(props) {
  return (
    <MenuContainer>
      <div>Documentation</div>
      <ul className="ul-start">
        <li class="li-first">
          <Link href="/">
            <a>Getting started</a>
          </Link>
        </li>
        <ul>
          <li className="li-regular">
            <Link href="/quick-start/create-an-account">
              <a>Create an account</a>
            </Link>
          </li>
          <li className="li-regular">
            <Link href="/quick-start/create-your first-nhost-project">
              <a> Create your first Nhost project</a>
            </Link>
          </li>
          <li className="li-regular">Log in to the Hasura console</li>
          <li className="li-regular">Interact with your data</li>
          <li className="li-regular">Next steps</li>
        </ul>
        <li class="li-first">Hasura</li>
        <ul>
          <li className="li-regular">Relanational data</li>
          <ul>
            <li className="li-regular">Add relational data</li>
            <li className="li-regular">second</li>
          </ul>
          <li className="li-regular">second</li>
        </ul>
      </ul>
    </MenuContainer>
  );
}
