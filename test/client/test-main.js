var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: '/base',

	paths: {
    'jquery': 'js/dependencies/jquery',
    'underscore': 'js/dependencies/underscore',
    'backbone': 'js/dependencies/backbone',
    'bootstrap': 'js/dependencies/bootstrap',
    'core': 'js/core'
	},
	shim: {
		'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
		}
	},

	// dynamically load all test files
	deps: allTestFiles,

	// we have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
