import styled from "styled-components";
import { Header } from "components/header";
import { Menu } from "components/menu";
import { MDXProvider } from "@mdx-js/react";
import "../style.css";
import "prismjs/themes/prism-okaidia.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr)
    [main-start] minmax(min-content, 75rem)
    [main-end] minmax(6rem, 1fr) [full-end];

  .menu-container {
    background: #f5f7f9;
    grid-column: 1 / 2;

    .menu-content {
      width: 25rem;
      float: right;
    }
  }
  .main-container {
    grid-column: main;
    padding: 0 3rem;
  }
`;

const mdComponents = {
  h1: (props) => {
    const link_id = props.children.replace(/ /g, "-").toLowerCase();
    return (
      <a href={`#${link_id}`}>
        <h1 id={link_id} {...props} />
      </a>
    );
  },
  h2: (props) => {
    console.log({ props });
    const link_id = props.children.replace(/ /g, "-").toLowerCase();
    return (
      <a href={`#${link_id}`}>
        <h2 id={link_id} {...props} />
      </a>
    );
  },
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <AppContainer>
        <Header />
        <div className="menu-container">
          <div className="menu-content">
            <Menu />
          </div>
        </div>
        <div className="main-container">
          <Component {...pageProps} />
        </div>
      </AppContainer>
    </MDXProvider>
  );
}
