import React from "react";
import Head from "next/head";

export function MetaTags({ meta }) {
  return (
    <React.Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:description" content={meta.description} />
      </Head>
    </React.Fragment>
  );
}
