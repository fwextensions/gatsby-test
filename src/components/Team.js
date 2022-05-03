import React, { useEffect, useState } from "react";
import { Box, Card, Image, Text } from "theme-ui";

function TeamMember({ name, picture })
{
	return (
		<Card>
			<Image
				variant="avatar"
				src={picture}
				sx={{ mb: ".5rem" }}
			/>
			<Text variant="heading">
				{name}
			</Text>
		</Card>
	);
}

export default function Team()
{
	const [members, setMembers] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				"https://randomuser.me/api/?inc=name,picture&results=18");
			const json = await response.json();

			setMembers(json.results);
		})();
	}, [setMembers]);

	return (
		<Box
			sx={{
				mt: "2rem",
				display: "flex",
				flexWrap: "wrap"
			}}
		>
			{members.map(({ name: { first, last }, picture: { large } }) => (
				<TeamMember
					name={first + " " + last}
					picture={large}
				/>
			))}
		</Box>
	);
}
