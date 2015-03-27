// Karma configuration
// Generated on Thu Feb 26 2015 11:04:59 GMT+0100 (CET)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		urlRoot: '/base',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine-jquery', 'jasmine', 'requirejs'],


		// list of files / patterns to load in the browser
		files: [
			{pattern: 'assets/**/*', included: false},
			//{pattern: 'assets/**/*.tpl', included: false},
			//{pattern: 'assets/**/*.html', included: false},
			//{pattern: 'assets/**/*.map', included: false},
			{pattern: 'test/client/**/*Spec.js', included: false},
			'test/client/test-main.js'
		],


		// list of files to exclude
		exclude: [
			'assets/main.js'
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
   		// source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'assets/**/*.js': ['coverage']
		},

		// optionally, configure the reporter
		coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// report which specs are slower than 500ms
		// CLI --report-slower-than 500
		reportSlowerThan: 100,

	});
};
