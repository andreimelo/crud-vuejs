/** @type {import('tailwindcss').Config} */
export default {
	mode    : 'jit', // Enable JIT mode
	content : [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme   : {
		extend : {},
	},
	plugins : [],
};
