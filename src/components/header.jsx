import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.div`
  display: grid;
  grid-column: full;
  grid-template-columns: inherit;

  height: 65px;
  border-bottom: 1px solid #e7e7e7;

  .main-container {
    grid-column: main;
    display: flex;
    align-items: center;

    .main-container--left {
    }

    .main-container--right {
      display: flex;
      margin-left: auto;
      .menu {
        display: flex;
        align-items: center;
        margin-right: 5rem;

        & > * {
          margin-left: 3rem;
        }

        a {
          font-family: Manrope;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;

          color: #757575;
        }
      }
      .buttons-container {
        display: flex;

        & > * {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export function Header(props) {
  return (
    <HeaderContainer>
      <div className="main-container">
        <div className="main-container--left">
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Nhost logo" />
            </a>
          </Link>
        </div>
        <div className="main-container--right">
          <div className="menu">Docs</div>
        </div>
      </div>
    </HeaderContainer>
  );
}
