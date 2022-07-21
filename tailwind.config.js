module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				purple: 'var(--orange)',
				white: 'var(--white)',
				badge: 'var(--badge)',
				light_purple: 'var(--light_orange)',
			},
		},
	},
	plugins: [],
};
