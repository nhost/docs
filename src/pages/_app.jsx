import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import Zoom from "react-medium-image-zoom";
import smartlookClient from "smartlook-client";
import { useTheme } from "next-themes";

import { Header } from "components/header";
import { Menu } from "components/menu";

import "react-medium-image-zoom/dist/styles.css";
import "../style.css";
import "../styles/prism.css";

import SEO from "../../next-seo.config";

const mdComponents = {
  h1: ({ children }) => {
    const linkId = children.replace(/ /g, "-").toLowerCase();
    return (
      <h1 id={linkId} className="text-3xl md:text-4xl pb-2 font-semibold">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    const linkId = children.replace(/ /g, "-").toLowerCase();
    return (
      <h2
        id={linkId}
        className="group flex whitespace-pre-wrap pt-3 md:pt-6 pb-2 text-2xl md:text-3xl font-semibold"
      >
        <a
          href={`#${linkId}`}
          className="absolute no-underline after:hash opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out text-primary"
          style={{ marginLeft: "-1.5rem", paddingRight: "0.5rem" }}
        >
          #
        </a>
        <span>{children}</span>
      </h2>
    );
  },
  h3: ({ children }) => {
    return (
      <h3 className="text-xl md:text-2xl pb-2 font-semibold">{children}</h3>
    );
  },
  h4: ({ children }) => {
    return <h4 className="text-xl pb-2 font-semibold">{children}</h4>;
  },
  img: ({ src, alt }) => {
    const { theme } = useTheme();

    const overlayBgColorStart =
      theme === "light" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)";
    const overlayBgColorEnd =
      theme === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.75)";

    return (
      <Zoom
        overlayBgColorStart={overlayBgColorStart}
        overlayBgColorEnd={overlayBgColorEnd}
        className="w-12"
      >
        <img src={src} alt={alt} className="img-md" />
      </Zoom>
    );
  },
  p: ({ children }) => {
    return <p className="py-3">{children}</p>;
  },
  a: ({ href, children }) => {
    return (
      <a href={href} className="hover:underline text-primary">
        {children}
      </a>
    );
  },
  ul: ({ children }) => {
    return <ul className="list-disc my-4 pl-5">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal my-4 pl-5">{children}</ol>;
  },
  hr: () => {
    return <hr className="my-4" />;
  },
  table: ({ children }) => {
    return <table className="my-4 table-auto w-full">{children}</table>;
  },
  thead: (props) => {
    return (
      <thead className="bg-gray-100 dark:bg-dark-bg-header">
        {props.children}
      </thead>
    );
  },
  blockquote: (props) => {
    return (
      <blockquote className="bg-blue-100 my-2 pl-2 py-2 px-2 border-l-4 border-blue-500 dark:bg-gray-800">
        {props.children}
      </blockquote>
    );
  },
  tr: (props) => {
    return <tr className="border-b">{props.children}</tr>;
  },
  th: ({ align, children }) => {
    return <th className={`p-3 text-${align}`}>{children}</th>;
  },
  td: ({ align, children }) => {
    return <td className={`p-3 text-${align}`}>{children}</td>;
  },
  inlineCode: ({ children }) => {
    return <code className="inline-code">{children}</code>;
  },
};

export default function App({ Component, pageProps }) {
  const [constructor, setConstructor] = useState(false);

  useEffect(() => {
    if (!constructor) {
      smartlookClient.init("8046e53cf51c2e51fc173ffc28bd6343f04ed2ec");
      setConstructor(true);
    }
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MDXProvider components={mdComponents}>
        <DefaultSeo {...SEO} />
        <div className="bg-white dark:bg-dark-bg-primary dark:text-dark-text-primary">
          <div className="w-full fixed z-50 border-b bg-white dark:bg-dark-bg-header">
            <Header />
          </div>
          <div className="md:container w-full mx-auto px-4 flex flex-col md:flex-row pt-16 md:pt-24">
            <div className="w-full md:w-1/5">
              <Menu />
            </div>
            <div className="w-full md:w-4/5 pb-24">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
}
