import React from "react";
import { Box, Flex, Text } from "theme-ui";
import BaseLink from "./Link";

const Link = ({ sx, ...props }) => (
	<BaseLink
		{...props}
		sx={{
			fontWeight: "normal",
			fontSize: 2,
			ml: 0,
			...sx
		}}
	/>
);

export default function Footer({ siteTitle, siteDescription })
{
	return (
		<Box as="footer"
			sx={{
				bg: "#73B3E7",
				mt: "24px",
				pb: "2rem"
			}}
		>
			<Box
				sx={{
					m: "0 auto",
					maxWidth: "80%",
					px: 3,
					py: 4,
				}}
			>
				<Flex as="nav" sx={{  }}>
					<Flex
						sx={{
							flexDirection: "column",
							flex: 2
						}}
					>
						<h3>
							<Link href="/" sx={{ fontWeight: "bold" }}>
								{siteTitle}
							</Link>
						</h3>
						<Text>{siteDescription}</Text>
					</Flex>
					<Flex
						sx={{
							flexDirection: "column",
							mr: "3rem"
						}}
					>
						<h3>Directory</h3>
						<Link href="/our-story">Our Story</Link>
						<Link href="/faq">FAQ</Link>
						<Link href="/support">Support</Link>
						<Link href="/user-guides">User Guides</Link>
					</Flex>
					<Flex
						sx={{
							flexDirection: "column"
						}}
					>
						<h3>Contact</h3>
						<Link href="mailto:contact@routedapp.net">contact@routedapp.net</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
