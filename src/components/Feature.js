import React from "react";
import { Box, Flex, Image } from "theme-ui";

export const Description = ({ children }) => (
	<Box
		sx={{
			px: "5rem",
			py: "2rem",
//			flexDirection: "column",
		}}
	>
		{children}
	</Box>
);

export function Feature({ children })
{
	return (
		<Box
			sx={{
				display: "grid",
				gridAutoFlow: "column",
				gridAutoColumns: "1fr",
				alignItems: "center"
			}}
		>
			{children}
		</Box>
	);
}
