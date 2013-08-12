// Karma configuration
// Generated on Mon Aug 12 2013 12:22:18 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    preprocessors: {
        'Scripts/*.js': 'coverage'
    },

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'Scripts/sinon/*.js',
      'Scripts/angular/angular.js',
      'Scripts/angular/angular-mocks.js',
      'Scripts/*.js',
      'Tests/*.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.min.js',
      '**/_*.js'
  ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
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


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
//    browsers: ['Chrome', 'IE', 'Firefox', 'PhantomJS' ],
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
