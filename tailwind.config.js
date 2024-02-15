/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require("daisyui")],
	darkMode: 'class',
	daisyui: {
		themes: ['light', 'business'],
		darkTheme: "business",
	},
	theme: {
		extend:  {
			flex: {
				'20': '0 0 20%',
				'25': '0 0 25%',
				'33': '0 0 33%',
				'test': '0 0 50%'
			},
			screens: {
				'tn': '300px',
				'ph': '576px',
			}
		},

	}
 }