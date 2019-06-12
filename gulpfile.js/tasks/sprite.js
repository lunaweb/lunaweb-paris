var gulp        = require('gulp');
var glob        = require('glob');
var merge       = require('merge-stream');
var path        = require('path');
var rename      = require('gulp-rename');
var svgstore    = require('gulp-svgstore');
var svgmin      = require('gulp-svgmin');
var browserSync = require('browser-sync');
var config      = require('../config').sprite;

if (!config) return;

// Concatenate svg files in a single sprite (by sprite folders)
gulp.task('sprite', function(){
  return merge(
    glob.sync(config.src).map(function(dirpath){
      var srcBase = config.src.split('**')[0];
      var relativePath = dirpath.replace(srcBase, '');
      var dirs = relativePath.split('/');

      // Last entry is empty cause source ending with "/" and so has no value
      dirs.pop();

      var spriteName = 'sprite' + dirs[dirs.length - 1].replace('sprite', '');

      // Don't need sprite folder anymore
      dirs.pop();

      var wildcardPath = dirs.join('/');

      return gulp.src(dirpath + '/*.svg')
        .pipe(svgmin(function (file) {
          var prefix = path.basename(file.relative, path.extname(file.relative));
          return {
            plugins: [{
              cleanupIDs: {
                prefix: prefix + '-',
                minify: true
              }
            }]
          }
        }))
        .pipe(rename({prefix: spriteName + '-'}))
        .pipe(svgstore({
          inline: true
        }))
        .pipe(gulp.dest(config.dest + '/' + wildcardPath))
        .pipe(browserSync.stream());
    })
  );
});

/**
 * Browsersync have some difficulties to reload / inject changes on SVG files,
 * so we have a specific task to force the reload.
 */
gulp.task('sprite-watch', ['sprite'], function(done){
  browserSync.reload();
  done();
});
