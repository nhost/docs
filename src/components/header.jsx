import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  SvgTwitter,
  SvgGithub,
  SvgSearch,
  SvgMoon,
  SvgSun,
} from "components/svg";

function DarkModeToggler() {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

  if (theme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="mr-4 border border-transparent hover:border-black rounded p-1 transition-all duration-150 ease-in-out"
      >
        <SvgMoon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme("light")}
      className="mr-4 border border-transparent hover:border-white rounded p-1 transition-all duration-150 ease-in-out"
    >
      <SvgSun className="w-6 h-6 text-gray-200" />
    </button>
  );
}

export function Header(props) {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: "15706cce2d437c46d95c9ee05aeb283f",
        indexName: "nhost",
        inputSelector: "#algolia-doc-search",
        debug: true,
      });
    } else {
      console.warn("Search has failed to load and now is being disabled");
      // this.setState({ enabled: false });
    }
  });

  const logoPath =
    theme === "light" ? "/images/logo.svg" : "/images/logo-dark.svg";

  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <img src={logoPath} style={{ height: "40px" }} />
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="font-semibold px-4">Documentation</div>
        <div className="px-4">
          <div className="flex itmes-center border border-gray-700 rounded">
            <div className="flex items-center text-gray-600">
              <SvgSearch className="w-6 h-6 mx-2" />
            </div>
            <input
              type="text"
              id="algolia-doc-search"
              placeholder="Search..."
              className="outline-none py-2 bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <DarkModeToggler />
        <a
          href="https://github.com/nhost/nhost"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 transition-all duration-150 ease-in-out"
        >
          <SvgGithub className="w-8 h-8" />
        </a>
        <a
          href="https://twitter.com/nhostio"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 transition-all duration-150 ease-in-out"
        >
          <SvgTwitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
