/**
 * Build js files using uglify.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');

gulp.task('build-clean', function () {
	return gulp.src(gulp.config.buildPath, {read: false})
		.pipe(clean({force: true}));
});

gulp.task('uglify', function () {
	return gulp.src(gulp.config.libPath + '/*.js')
		.pipe(uglify({
			mangle: false,
			compress: false,
			preserveComments: false
		}))
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(gulp.config.buildPath));
});

gulp.task('js', ['jshint'], function (done) {
	runSequence('uglify', done);
});

gulp.task('build', ['build-clean'], function (done) {
	runSequence('jshint','uglify', 'less', 'less-prod', done);
});
