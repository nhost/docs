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

    .main-container-width {
      max-width: 90rem;
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
          <img
            src={"images/openchat.png"}
            alt=""
            onClick={() => window.open("https://nhost.io/discord", "_blank")}
            style={{ width: 120 }}
          />
        </div>
      </AppContainer>
    </MDXProvider>
  );
}
