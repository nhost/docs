import { SEO } from "components/seo";
export default function Layout({ frontMatter, children }) {
  // React hooks, for example `useState` or `useEffect`, go here.
  const slug = frontMatter.__resourcePath
    .replace(/.*pages\//, "")
    .replace(".mdx", "");

  const h2s = children
    .filter((item) => item.props.mdxType === "h2")
    .map((item) => item.props.children);

  return (
    <div className="flex">
      <div className="lg:px-8 xl:w-3/4 md-container -mt-3">
        <SEO title={frontMatter.title} description={frontMatter.description} />
        <h1 className="text-4xl pb-2 font-semibold">{frontMatter.title}</h1>
        {children}
        <div className="py-12 border-t">
          <div>
            <div>Edit this page on Github:</div>
            <a
              href={`https://github.com/nhost/docs/tree/master/src/pages/${slug}.mdx`}
              rel="noopener noreferrer"
              className="block hover:underline text-primary"
            >
              https://github.com/nhost/docs/tree/master/src/pages/
              {slug}.mdx
            </a>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:w-1/4 relative">
        <div className="fixed">
          <div className="uppercase text-sm text-gray-700 pb-2">
            On this page
          </div>
          <div>
            {h2s.map((h2) => {
              const linkId = h2.replace(/ /g, "-").toLowerCase();
              return (
                <div className="py-1" key={h2}>
                  <a href={`#${linkId}`}>{h2}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
