/**
 * JShint
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var shell = require('shell-promise');

gulp.task('jshint', function () {
	return gulp.src(['./src/*.js','./test/*.js','./gulpfile.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'))
		;
});

gulp.task('npm test', function () {
	return shell.exec("npm test").then(function () {

	});
});
