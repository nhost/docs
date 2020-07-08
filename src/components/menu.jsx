import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div`
  a {
    color: #000;
  }

  ul {
    /* border-left: 1px solid #ddd; */
    padding: 0 0 0 2rem;
    margin-left: -1px;
  }

  /* Skip padding first ul */
  > ul {
    padding-left: 0;
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
      <ul>
        <li className="header">Getting started</li>
        <ul>
          <li>
            <Link href="/getting-started">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <Link href="/getting-started/quick-start">
              <a>Quick Start</a>
            </Link>
          </li>
          <li>
            <Link href="/quick-start/create-your first-nhost-project">
              <a> Create your first Nhost project</a>
            </Link>
          </li>
          <li>Log in to the Hasura console</li>
          <li>Interact with your data</li>
          <li>Next steps</li>
        </ul>
        <li>
          <Link href="/">
            <a>Hasura</a>
          </Link>
        </li>
        <ul>
          <li>
            <Link href="/">
              <a>Relational data</a>
            </Link>
          </li>
          <ul>
            <li>
              <Link href="/">
                <a>Add relational data</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Second</a>
              </Link>
            </li>
          </ul>
          <li>
            {" "}
            <Link href="/">
              <a>Second</a>
            </Link>
          </li>
        </ul>
      </ul>
    </MenuContainer>
  );
}
