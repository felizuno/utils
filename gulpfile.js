var gulp = require('gulp');
var jeditor = require("gulp-json-editor");
var forEach = require('gulp-foreach');
var fc2json = require('gulp-file-contents-to-json');
var clean = require('gulp-clean');

var test = require('./build/helpers/test-runner.js');

gulp.task('manifest', function() {
  gulp.src('./src/manifest.json', {read: false})
    .pipe(clean())
    .pipe(gulp.dest('./src/'));

  gulp.src(['./src/**/*', '!./src/manifest.json'])
    .pipe(fc2json('manifest.json'))
    .pipe(gulp.dest('./src/'));
});


gulp.task('test', ['manifest'], function() {
  gulp.src('src/functions/*.js')
    .pipe(forEach(function(stream, file) {
      return stream.pipe(test())
    }))
    .pipe(gulp.dest('./build/target/node'))
});

gulp.task('concat-polyfills', function() {
});

gulp.task('concat-functions', function() {
});

gulp.task('build-node', function() {
});

gulp.task('build-client', function() {
});

gulp.task('clean', function() {
});

gulp.task('build', function() {
});

gulp.task('default', function() {
  console.log('init');
});
