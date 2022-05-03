import React from "react";
import { Box, Flex, NavLink } from "theme-ui";

function HeaderLink({ href, sx, children })
{
	return (
		<NavLink
			href={href}
			sx={{
				fontSize: 4,
				ml: 5,
				...sx
			}}
		>
			{children}
		</NavLink>
	);
}

export default function Header({ siteTitle, siteDescription })
{
	return (
		<Box as="header"
			sx={{
				borderBottom: "1px solid #aaa",
				borderBottomColor: "gray.3",
				mb: "24px"
			}}
		>
			<Box as="div"
				sx={{
					m: "0 auto",
					maxWidth: "80%",
					px: 3,
					py: 4,
				}}
			>
				<Flex as="nav" sx={{ justifyContent: "space-between" }}>
					<HeaderLink href="/gatsby-test/" sx={{ m: 0 }}>
						{siteTitle}
					</HeaderLink>
					<Flex>
						<HeaderLink href="/gatsby-test/our-story">Our Story</HeaderLink>
						<HeaderLink href="/gatsby-test/faq">FAQ</HeaderLink>
						<HeaderLink href="/gatsby-test/support">Support</HeaderLink>
						<HeaderLink href="/gatsby-test/user-guides">User Guides</HeaderLink>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
