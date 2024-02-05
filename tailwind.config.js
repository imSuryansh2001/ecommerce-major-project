/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0098ff',
				secondary: '#7b35c8',
				// "primary-gradient": "linear-gradient(75deg,#0098ff 0%,#7b35c8 100%)",
			},
			backgroundImage: {
				'primary-work': 'linear-gradient(75deg,#0098ff 0%,#7b35c8 100%)',
			},
			fontFamily: {
				primary: ['Outfit', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
