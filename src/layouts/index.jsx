import { SEO } from "components/seo";
export default function Layout(frontMatter) {
  return ({ children: content }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    const slug = frontMatter.__resourcePath
      .replace(/.*pages\//, "")
      .replace(".mdx", "");

    return (
      <div>
        <h1>{frontMatter.title}</h1>
        <SEO title={frontMatter.title} description={frontMatter.description} />
        {content}
      </div>
    );
  };
}
