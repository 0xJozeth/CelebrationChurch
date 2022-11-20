/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1440px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'4k': '2560px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				body: ['neue-haas-grotesk-display', 'sans-serif'],
				display: ['neue-haas-grotesk-display', 'sans-serif'],
				kepler: ['kepler-std-display', 'serif'],
			},
			gridTemplateColumns: {
				minmax2: '80px 200px',
			},
		},
		fontWeight: {
			hairline: 100,
			'extra-light': 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			'extra-bold': 800,
			black: 900,
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
