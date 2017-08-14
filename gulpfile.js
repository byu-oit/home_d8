'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
//var concat = require('gulp-concat');
//var inject = require('gulp-inject');


gulp.task('css', function() {
    return gulp.src(['./scss/*.scss', '!./scss/mixins.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.'))
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
gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', ['css']);
});
