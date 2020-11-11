import styled from "styled-components";
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
  h1: (props) => {
    const linkId = props.children.replace(/ /g, "-").toLowerCase();
    return (
      <h1 id={linkId} {...props} className="text-4xl pb-2 font-semibold">
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    const linkId = props.children.replace(/ /g, "-").toLowerCase();
    return (
      <h2
        id={linkId}
        {...props}
        className="group flex whitespace-pre-wrap pt-6 pb-2 text-3xl font-semibold"
      >
        <a
          href={`#${linkId}`}
          className="absolute no-underline after:hash opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out text-primary"
          style={{ marginLeft: "-1.5rem", paddingRight: "0.5rem" }}
        >
          #
        </a>
        <span>{props.children}</span>
      </h2>
    );
  },
  img: ({ src, alt }) => {
    return (
      <Zoom>
        <img src={src} alt={alt} className="img-md" />
      </Zoom>
    );
  },
  p: (props) => {
    return (
      <p className="py-3 text-lg text-gray-800 leading-7">{props.children}</p>
    );
  },
  ul: (props) => {
    return (
      <ul className="text-lg text-gray-800 leading-7 list-disc pl-6">
        {props.children}
      </ul>
    );
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
        <div className="lg:w-1/5 h-screen overflow-y-scroll">
          <div>
            <Menu />
          </div>
        </div>
        <div className="lg:w-4/5">
          <Component {...pageProps} />
        </div>
      </div>
    </MDXProvider>
  );
}
