import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

export function SEO({ title, description }) {
  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={description}
        canonical="https://docs.nhost.io"
        openGraph={{
          // url: "https://docs.nhost.io",
          title: title,
          description: description,
        }}
      />
    </React.Fragment>
  );
}
