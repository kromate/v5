module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#111111',
				secondary: '#8892b0',
				green: 'var(--green)',
				light_green: '#3adb282f',
			},
		},
	},
	plugins: [],
};
