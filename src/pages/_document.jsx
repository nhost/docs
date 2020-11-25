import smartlookClient from "smartlook-client";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  componentDidMount() {
    smartlookClient.init("8046e53cf51c2e51fc173ffc28bd6343f04ed2ec");
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          />
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
