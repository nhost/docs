import React from "react";
import { MenuMobile } from "./menu-mobile";
import { MenuDesktop } from "./menu-desktop";

export function Menu() {
  return (
    <>
      <MenuMobile />
      <MenuDesktop />
    </>
  );
}
