'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
   image = require('gulp-image');

gulp.task("optimizeImages", function() {
  gulp.src("fixtures/photos/*")
  .pipe(image())
  .pipe(gulp.dest('img/photos/'));
});

gulp.task("concatScripts", function() {
  gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js'
  ])
  .pipe(maps.init())
  .pipe(concat('app.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", function() {
  gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {
  gulp.src("scss/main.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('css'))
});
