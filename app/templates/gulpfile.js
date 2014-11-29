var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var PATHS = {
  src: 'src/**/*.js',
  test: 'test/**/*.spec.js'
};

gulp.task('lint', function () {
  return gulp.src([PATHS.src, PATHS.test]).pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
  gulp.src(PATHS.test, {read: false})
    .pipe(mocha().on('error', function() {}));
});

gulp.task('tdd', ['test'], function () {
  gulp.watch([PATHS.src, PATHS.test], ['test']);
});

gulp.task('default', ['lint', 'test']);
