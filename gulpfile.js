'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task("concatScripts", function() {
  gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'));
});
