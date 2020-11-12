import React from "react";
import Link from "next/link";
import { SvgDiscord, SvgTwitter, SvgGithub } from "components/svg";
// import Link from "next/link";
// import { Menu } from "components/menu";

export function Header(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" style={{ height: "40px" }} />
          </a>
        </Link>
      </div>
      <div className="font-semibold">Documentation</div>
      <div className="flex">
        <a
          href="https://github.com/nhost"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-700 hover:text-gray-900 transition-all duration-150 ease-in-out"
        >
          <SvgGithub />
        </a>
        <a
          href="https://twitter.com/nhostio"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-700 hover:text-gray-900 transition-all duration-150 ease-in-out"
        >
          <SvgTwitter />
        </a>
        <a
          href="https://discord.com/invite/9V7Qb2U"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-700 hover:text-gray-900 transition-all duration-150 ease-in-out"
        >
          <SvgDiscord />
        </a>
      </div>
    </div>
  );
}
