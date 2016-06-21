'use strict';
const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  fs = require('fs'),
  path = require('path');

  const sources = {
    js: __dirname + '/src/index.js',
    html: __dirname + '/src/**/*.html',
    css: __dirname + '/src/styles/**/*.css',
    test: __dirname + '/test/client-spec.test.js',
    assets: __dirname + '/src/assets/**/*.*'
  }

const dests = {
  build: __dirname + '/build'
}

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js'},
        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
            }]
        }
      }))
    .pipe(gulp.dest(dests.build));
})

gulp.task('copyHtml', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest(dests.build));
})

gulp.task('copyCss', () => {
  return gulp.src(sources.css)
    .pipe(gulp.dest(dests.build+'/styles'));
})

gulp.task('copyAssets', () => {
  return gulp.src(sources.assets)
    .pipe(gulp.dest(dests.build+'/assets'));
})

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'bundle.test.js'}}))
    .pipe(gulp.dest(__dirname+'/test'));
})

gulp.task('default', ['bundle:dev', 'copyHtml', 'copyCss', 'copyAssets']);
