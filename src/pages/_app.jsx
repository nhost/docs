import styled from "styled-components";
import { Header } from "components/header";
import { Menu } from "components/menu";
import { MDXProvider } from "@mdx-js/react";
import "../style.css";
import "prismjs/themes/prism-okaidia.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  grid-template-rows: 65px auto;
  grid-template-areas:
    "header header"
    "menu main";

  .menu-container {
    grid-area: menu;
    height: calc(100vh - 65px);
    overflow-y: auto;
    background: #f5f7f9;

    .menu-content {
      /* width: 30rem; */
      /* float: right; */
      padding: 1rem 2rem;
    }
  }

  .main-container {
    grid-area: main;
    height: calc(100vh - 65px);
    overflow-y: auto;
    padding: 0 3rem;
    padding-bottom: 10rem;

    .main-container-width {
      max-width: 70rem;
    }
  }

  .discort-button-style {
    position: absolute;
    bottom: 0;
    right: 3rem;
    font-size: 1.4rem;
    padding: 1rem 1rem 0.3rem;
    box-shadow: 0 0 8px 2px rgba(116, 129, 141, 0.1);

    &:hover {
      background: #f5f7f9;
      box-shadow: 0 0 8px 2px rgba(116, 129, 141, 0.3);
    }

    a {
      display: flex;
      align-items: center;
    }

    img {
      width: 30px;
      margin-right: 0.7rem;
    }
  }
`;

const mdComponents = {
  h1: (props) => {
    let link_id = "";
    try {
      link_id = props.children.replace(/ /g, "-").toLowerCase();
    } catch (error) {
      console.log("unable to to use .replace");
      console.log(props.children);
    }
    return (
      <a href={`#${link_id}`}>
        <h1 id={link_id} {...props} />
      </a>
    );
  },
  h2: (props) => {
    let link_id = "";
    try {
      link_id = props.children.replace(/ /g, "-").toLowerCase();
    } catch (error) {
      console.log("unable to to use .replace");
      console.log(props.children);
    }
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
          <div className="main-container-width">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="discort-button-style">
          <a href="https://nhost.io/discord" target="_blank">
            <img src="/images/icon-discord.png" alt="" />
            Chat with us at Discord
          </a>
        </div>
      </AppContainer>
    </MDXProvider>
  );
}
