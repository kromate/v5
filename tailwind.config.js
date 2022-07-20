module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				green: 'var(--purple)',
				white: 'var(--white)',
				purple: 'var(--purple)',
				light_green: 'var(--light_purple)',
			},
		},
	},
	plugins: [],
};
