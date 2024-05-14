/** @type {import('tailwindcss').Config} */

const { fromJSON } = require('postcss')
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#2E3239',
	gray: '#CDCDCD',
	white: twColors.white,
	primary: '#FF9902',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697',
	red: twColors.red[400]
}

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {},
		Keyframes: {
			animationOpacity: {
				from: {
					opacity: 0
				},
				to: {
					opacity: 1
				}
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)'
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)'
				}
			}
		}
	},
	plugins: []
}
