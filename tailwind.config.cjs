/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				"green": "#00DB99",
				"border": "#E5E5E5",
				"inactive": "#FF285C",
				"onhold": "#F0BB00",
				"gray": {
					DEFAULT: "#F9F9F9",
					"dark": "#F1F2F7",
				}

			}
		},
  },
  plugins: [],
}
