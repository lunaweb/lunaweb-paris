var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var hologram    = require('gulp-hologram');
var include     = require('gulp-include');
var replace     = require('gulp-replace');
var util        = require('gulp-util');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var config      = require('../config').styleguide;

if (!config) return;

// Build styleguide and this assets
gulp.task('styleguide', function(callback){
  return runSequence(
    'styleguide:compile',
    'styleguide:assets',
    callback
  );
});

  // Compile styleguide : simply exectue Hologram
  gulp.task('styleguide:compile', function() {
    return gulp.src(config.src)
      .pipe(plumber())
      .pipe(hologram())
      .pipe(browserSync.stream());
  });

  /**
   * Since the styleguide base folder is outside of Middleman sources we c'ant use
   * traditionals `stylesheets` and `javascripts` tasks.
   * So we use sprockets like inclusions.
   */
  gulp.task('styleguide:assets', function(){
    return gulp.src(config.src_assets)
      .pipe(plumber())
      .pipe(include(config.include).on('error', util.log))
      .pipe(gulp.dest(config.dest_assets))
      .pipe(browserSync.stream());
  });

// Dev specific task for handling browsersync
gulp.task('styleguide-dev', function(callback){
  return runSequence(
    'styleguide:compile',
    ['styleguide-dev:inject-browsersync', 'styleguide:assets'],
    callback
  );
});

  /**
   * Inject browsersync livereload script as the styleguide does not live in Middleman execution,
   * so we can't add it manually in the template because we don't when we are in developement mode or not.
   */
  gulp.task('styleguide-dev:inject-browsersync', function() {
    return gulp.src(config.src_browsersync)
      .pipe(replace(/<\/body>(?![\s\S]*<\/body>)/, '<script async src=\"http://localhost:3001/browser-sync/browser-sync-client.js?v=2.26.5\"></script></body>'))
      .pipe(gulp.dest(config.dest_browsersync));
  });
