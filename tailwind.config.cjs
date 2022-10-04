/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
			colors: {
				"primary": "#717986",
				"green": "#00DB99",
				"inactive": "#FF285C",
				"onhold": "#F0BB00",
				"gray": {
					"light": "#F9F9F9",
					DEFAULT: "#F1F2F7",
					"dark": "#E5E5E5",
					"deep": "#8B8B8B"
				},
				"navy": "#3C557A",
				"divider": "#CDDCEE",
			}
		},
  },
  plugins: [],
}
