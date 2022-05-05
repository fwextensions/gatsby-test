import React from "react";
import { Box, Flex } from "theme-ui";
import Link from "./Link";

export default function Header({ siteTitle })
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
					<Link href="/" sx={{ m: 0 }}>
						{siteTitle}
					</Link>
					<Flex>
						<Link href="/our-story">Our Story</Link>
						<Link href="/faq">FAQ</Link>
						<Link href="/support">Support</Link>
						<Link href="/user-guides">User Guides</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
