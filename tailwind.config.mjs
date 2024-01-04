/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'very-dark-blue' : '#15263F',
				'very-dark-blue-line' : '#2E405A',
				'soft-blue' : '#8BACD9',
				'cyan' : '#00FFF8',
			},
			boxShadow: {
				'card': '0px 25px 50px 0px rgba(0, 0, 0, 0.10)',
			},
		},
	},
	plugins: [],
}
