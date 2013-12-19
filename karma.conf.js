// Karma configuration
// Generated on Wed Dec 18 2013 20:21:49 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '.',


    // frameworks to use
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.html': []
    },

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/*.js',
      'test/lib/jquery-1.10.2.min.js',
      'test/lib/jasmine-fixture.min.js',
      'test/lib/jasmine-jquery.js',
      {
        pattern: 'test/fixtures/**/*.html',
        watched: true,
        included: false,
        served: true
      }
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'junit', 'html'],


    junitReporter: {
      outputFile: 'report/test-results.xml',
      suite: ''
    },

    htmlReporter: {
      outputDir: 'report',
      templatePath: __dirname + '/jasmine_template.html'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
