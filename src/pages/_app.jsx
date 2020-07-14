import styled from "styled-components";
import { Header } from "components/header";
import { Menu } from "components/menu";
import "../style.css";
import "prismjs/themes/prism-okaidia.css";
import { discordbutton } from "components/discordbutton"
//import {openchatimg} from "../../public/images/openChat.png"

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

export default function App({ Component, pageProps }) {
  return (
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
      <div className="App">
        <discordbutton 
        onClick={() => window.open("https://nhost.io/discord", "_blank")}
        type="button"
        img src={"../../public/images/openChat.png"}
        ></discordbutton>
      </div>
    </AppContainer>
  );
}
