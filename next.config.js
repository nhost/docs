const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  remarkPlugins: [
    require("remark-code-titles"),
    require("remark-unwrap-images"),
  ],
  rehypePlugins: [mdxPrism],
  pageExtensions: ["js", "jsx", "mdx", "md"],
})();

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     rehypePlugins: [rehypePrism],
//   },
// });
// module.exports = withMDX({});
