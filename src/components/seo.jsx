import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

export function SEO({ title, description, slug = "" }) {
  const titleFormatted = `${title ? title : "Nhost documentation"}`;
  const url = `https://docs.nhost.io/${slug}`;

  return (
    <React.Fragment>
      <NextSeo
        title={titleFormatted}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: titleFormatted,
          description: description,
        }}
      />
    </React.Fragment>
  );
}
