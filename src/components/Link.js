/** @jsxImportSource theme-ui */
import React from "react";
import { Link as GatsbyLink } from "gatsby";

	// enable the sx prop on the Link component from Gatsby, so we can style it
	// with Theme-UI.  followed info from these pages:
	// https://theme-ui.com/recipes/gatsby-link/
	// https://github.com/system-ui/theme-ui/issues/1596
export default function Link({ sx, ...props })
{
	return <GatsbyLink
		{...props}
		activeStyle={{ fontWeight: 700 }}
		activeClassName="active"
		sx={{
			color: "inherit",
			textDecoration: "none",
			fontSize: 4,
			ml: 5,
			"&:hover": {
				color: "primary"
			},
				// set a class on active links so we can disable any hover effect
			"&.active:hover": {
				color: "inherit",
				cursor: "default"
			},
			...sx
		}}
	/>;
}