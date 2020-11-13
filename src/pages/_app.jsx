import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import Zoom from "react-medium-image-zoom";
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
      <h1 id={linkId} className="text-4xl pb-2 font-semibold">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    const linkId = children.replace(/ /g, "-").toLowerCase();
    return (
      <h2
        id={linkId}
        className="group flex whitespace-pre-wrap pt-6 pb-2 text-3xl font-semibold"
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
    return <h3 className="text-2xl pb-2 font-semibold">{children}</h3>;
  },
  h4: ({ children }) => {
    return <h4 className="text-xl pb-2 font-semibold">{children}</h4>;
  },
  img: ({ src, alt }) => {
    return (
      <Zoom>
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
  table: ({ children }) => {
    return <table className="my-4 table-auto w-full">{children}</table>;
  },
  thead: (props) => {
    return <thead className="bg-gray-100">{props.children}</thead>;
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
  return (
    <MDXProvider components={mdComponents}>
      <DefaultSeo {...SEO} />
      <div className="w-full fixed z-50 bg-white border-b">
        <Header />
      </div>
      <div className="container mx-auto px-4 flex pt-24">
        <div className="lg:w-1/5">
          <div>
            <Menu />
          </div>
        </div>
        <div className="lg:w-4/5 pb-24">
          <Component {...pageProps} />
        </div>
      </div>
    </MDXProvider>
  );
}
