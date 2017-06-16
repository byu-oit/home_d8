'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var minify = require('gulp-minify');


gulp.task('styles', function() {
    gulp.src('./scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'));
});
// maybe comment later?
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});

//gulp.task('index', function () {
//  var target = gulp.src('./public/index.html');
//  // It's not necessary to read the files (will speed up things), we're only after their paths:
//  var sources = gulp.src(['./js/**/*.js', './css/**/*.css'], {read: false});
//
//  return target.pipe(inject(sources, { relative: true }))
//    .pipe(gulp.dest('./public'));
//});

//gulp.task('compress', function() {
//  gulp.src('./js/*.js')
//    .pipe(minify({
//      ext:{
//        min:'.js'
//      },
//      exclude: ['tasks'],
//      ignoreFiles: ['-min.js']
//    }))
//    .pipe(gulp.dest('./dist'))
//});

//Watch task
gulp.task('default',['styles'], function() {
  gulp.watch('scss/**/*.scss');
});

//Distribution task
gulp.task('css', ['styles', 'minify-css',]);

