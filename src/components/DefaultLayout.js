import React from "react";
import { Box } from "theme-ui";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children })
{
	const { title, description } = useSiteMetadata();

	return (
		<>
			<Header
				siteTitle={title}
				siteDescription={description}
			/>
			<Box
				as="div"
				sx={{
					margin: "0 auto",
					maxWidth: "80%",
					padding: "0 1.0875rem 1.45rem",
				}}
			>
				<Box as="main">{children}</Box>
			</Box>
			<Footer
				siteTitle={title}
				siteDescription={description}
			/>
		</>
	);
}
