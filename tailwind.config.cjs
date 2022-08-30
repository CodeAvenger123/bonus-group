/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#000000',
				'sectionDark': '#171b21',
				'sectionLight': '#282E39',
				'primaryBlue': '#6c63ff',
				'greyText': '#8d8d8d',
				'primaryBlue': '#6c63ff'
			}
		},
	},
	plugins: [],
}
