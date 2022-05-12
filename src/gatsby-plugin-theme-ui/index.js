import { deep, bootstrap } from "@theme-ui/presets";

const theme = {
	...bootstrap,

	colors: {
		...bootstrap.colors,
		modes: {
			dark: {
				...deep.colors,
			},
		},
	},

	styles: {
		...bootstrap.styles,
		p: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "body",
			fontSize: 3,
		},
		h1: {
			fontSize: 8,
			fontWeight: "bold",
			mt: "48px",
			mb: "48px"
		},
		h4: {
			...bootstrap.styles.h4,
			fontWeight: "bold"
		}
	},

	text: {
		name: {
			fontWeight: "bold",
			fontSize: 2
		}
	},

	cards: {
		primary: {
			width: 180,
			textAlign: "center",
			padding: "20px 30px",
			mr: "1.5rem",
			mb: "1.5rem",
			borderRadius: 4,
			boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
		}
	},

	images: {
		avatar: {
			width: 100,
			height: 100,
			borderRadius: 99999,
		},
	}
};

export default theme;
