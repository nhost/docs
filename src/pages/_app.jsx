import styled from "styled-components";
import { Header } from "components/header";
import { Menu } from "components/menu";
import "../style.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [main-start] repeat(
      4,
      [col-start] minmax(min-content, 30rem) [col-end]
    )
    [main-end] minmax(6rem, 1fr) [full-end];

  .main-container {
    display: grid;
    grid-column: main;
    grid-template-columns: 30rem 1fr;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <AppContainer>
      <Header />
      <div className="main-container">
        <div>
          <Menu />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </AppContainer>
  );
}
