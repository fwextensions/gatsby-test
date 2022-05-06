module.exports = {
	siteMetadata: {
		title: "RoutED",
		description: "Directing patients to the most available care.",
		siteUrl: `https://www.yourdomain.tld`
	},
	pathPrefix: "/gatsby-test",
	plugins: [
		"gatsby-plugin-theme-ui",
		"gatsby-plugin-styled-components",
//		"gatsby-plugin-image",
//		"gatsby-plugin-react-helmet",
//		"gatsby-plugin-sitemap",
//		"gatsby-plugin-sharp",
//		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
				defaultLayouts: {
					default: require.resolve("./src/components/DefaultLayout.js")
				}
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				"trackingId": "CHANGEME"
			}
		},
	]
};
