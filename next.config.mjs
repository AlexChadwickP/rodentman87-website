import remarkGfm from "remark-gfm";
import nextmdx from "@next/mdx";

const withMDX = nextmdx({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
		providerImportSource: "@mdx-js/react",
	},
});
export default withMDX({});
