var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

var concurrentTasks = ['images', 'stylesheets', 'javascripts', 'fonts', 'sprite'];

// Staging & Production : Rebuild assets
gulp.task('build', function(callback){
  if(config.styleguide){
    concurrentTasks.push('styleguide');
  }

  return runSequence(
    'clean',
    concurrentTasks,
    callback
  );
});

// Developement : Rebuild assets and watch them
gulp.task('build-dev', function(callback){
  if(config.styleguide){
    concurrentTasks.push('styleguide-dev');
  }

  return runSequence(
    'clean',
    concurrentTasks,
    'watch',
    callback
  );
});
