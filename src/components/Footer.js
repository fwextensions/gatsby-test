import React from "react";
import { Box, Flex, NavLink, Text } from "theme-ui";

const Link = ({ href, sx, children }) => (
	<NavLink
		href={href}
		sx={{
			fontWeight: "normal",
			...sx
		}}
	>
		{children}
	</NavLink>
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
							<Link href="/gatsby-test/" sx={{ fontWeight: "bold" }}>
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
						<Link href="/gatsby-test/our-story">Our Story</Link>
						<Link href="/gatsby-test/faq">FAQ</Link>
						<Link href="/gatsby-test/support">Support</Link>
						<Link href="/gatsby-test/user-guides">User Guides</Link>
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
