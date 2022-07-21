module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				orange: 'var(--orange)',
				white: 'var(--white)',
				badge: 'var(--badge)',
				light_orange: 'var(--light_orange)',
			},
		},
	},
	plugins: [],
};
