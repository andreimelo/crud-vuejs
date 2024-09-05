module.exports = {
	transform               : {
		'^.+\\.vue$' : '@vue/vue3-jest', // Transform Vue single-file components
		'^.+\\.js$'  : 'babel-jest', // Transform JavaScript files
	},
	moduleFileExtensions    : [
		'js',
		'vue',
		'json',
	], // Ensure Jest knows about Vue and TypeScript files
  	testEnvironment: 'jest-environment-jsdom',
	transformIgnorePatterns: [
    'node_modules/(?!(vue|@vue)/)', 
  ],
   testEnvironmentOptions: {
       customExportConditions: ["node", "node-addons"],
    },
};
