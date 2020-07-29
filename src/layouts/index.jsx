import { SEO } from "components/seo";
export default function Layout(frontMatter) {
  console.log(frontMatter);
  return ({ children: content }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    const slug = frontMatter.__resourcePath
      .replace(/.*pages\//, "")
      .replace(".mdx", "");

    console.log({ slug });
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        <SEO title={frontMatter.title} description={frontMatter.description} />
        {content}
      </div>
    );
  };
}
