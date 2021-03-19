import classNames from "classnames";
import { SEO } from "components/seo";

export default function Layout({ frontMatter, children }) {
  // React hooks, for example `useState` or `useEffect`, go here.
  const slug = frontMatter.__resourcePath
    .replace(/.*pages\//, "")
    .replace(".mdx", "");

  // right side sub menu
  const subMenu = [];

  children.forEach((item) => {
    if (item.props.mdxType === "h2") {
      subMenu.push({
        type: "h2",
        content: item.props.children,
      });
    } else if (item.props.mdxType === "h3") {
      subMenu.push({
        type: "h3",
        content: item.props.children,
      });
    }
  });

  console.log({ subMenu });

  return (
    <div className="flex">
      <div className="w-full md:px-4 lg:px-14 xl:w-3/4 md-container -mt-3">
        <SEO
          title={frontMatter.title}
          description={frontMatter.description}
          slug={slug}
        />
        <h1 className="text-xl pb-2 font-semibold">{frontMatter.title}</h1>
        {children}
        <div className="py-12 border-t">
          <div className="break-all">
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
          <div className="uppercase text-sm text-gray-500 pb-2">
            On this page
          </div>
          <div>
            {subMenu.map((item) => {
              const linkId = item.content.replace(/ /g, "-").toLowerCase();
              const classes = classNames("py-2 text-gray-600", {
                "pl-3": item.type === "h3",
              });
              return (
                <div className={classes} key={item.content}>
                  <a href={`#${linkId}`}>{item.content}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
