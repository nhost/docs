import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Menu } from "components/menu";

const HeaderContainer = styled.div`
  grid-area: header;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-bottom: 1px solid #d4dadf;

  .header-container {
    display: flex;
    align-items: center;
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

    .menu-controller {
      display: none;
      align-items: center;
      margin-left: 2rem;
      cursor: pointer;

      span {
        margin-left: 0.4rem;
      }

      @media only screen and (max-width: 980px) {
        display: flex;
      }
    }

    .mobile-menu-container {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      background: #f5f7f9;
      z-index: 100;
      padding: 3rem;

      .mobile-menu-container-main {
        max-width: 45rem;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export function Header(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <div className="header-container">
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Nhost logo" className="logo" />
          </a>
        </Link>
        <div className="menu-controller" onClick={() => setMenuOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="butt"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span>menu</span>
        </div>
        {menuOpen && (
          <div className="mobile-menu-container">
            <div className="mobile-menu-container-main">
              <Menu
                closeMenu={() => {
                  console.log("setMenuOpen(false)");
                  setMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}
