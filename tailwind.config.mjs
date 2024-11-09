/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:'class' ,
	theme: {
		extend: {
			animation:{
				'float': 'float 8s ease-in-out infinite',
			},
			keyframes:{
				float: {
					'0%, 100%': { transform: 'translateY(-50px)' },
					'50%': { transform: 'translateY(50px)' },
				},
			}
		},
	},
	plugins: [],
}
