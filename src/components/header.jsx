import React, { useEffect } from "react";
import Link from "next/link";
import { SvgDiscord, SvgTwitter, SvgGithub, SvgSearch } from "components/svg";

export function Header(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

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

  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" style={{ height: "40px" }} />
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
