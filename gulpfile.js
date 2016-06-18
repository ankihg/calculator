'use strict';
const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  fs = require('fs');

  const sources = {
    js: __dirname + '/src/index.js',
    html: __dirname + '/src/**/*.html'
  }

const dests = {
  build: __dirname + '/build'
}

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js'}}))
    .pipe(gulp.dest(dests.build));
})

gulp.task('copyHtml', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest(dests.build));
})

gulp.task('default', ['bundle:dev', 'copyHtml']);
