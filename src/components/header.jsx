import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.div`
  grid-area: header;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-bottom: 1px solid #d4dadf;

  .header-container {
    display: flex;
    height: 100%;

    .header-container--left {
      height: 100%;
      a {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .logo {
        height: 35px;
        margin-left: 1rem;
      }
    }

    .header-container--right {
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
      <div className="header-container">
        <div className="header-container--left">
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Nhost logo" className="logo" />
            </a>
          </Link>
        </div>
        <div className="header-container--right">
          <div className="menu">Docs</div>
        </div>
      </div>
    </HeaderContainer>
  );
}
