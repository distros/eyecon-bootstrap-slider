/**
 * Compiles less files with the Clean CSS and Autoprefix plugins
 */

var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var deepExtend = require('deep-extend');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	cleancss = new LessPluginCleanCSS({advanced: true}),
	autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

//options used for both the dev and prod builds
var options = {
	paths: [
		'./node_modules/bootstrap-less'
	],
	plugins: [autoprefix, cleancss]
};

gulp.task('less', function () {
	gulp.src(gulp.config.libPath + '/*.less')
		.pipe(less(deepExtend({
			compress: false
		},options)))
		.pipe(gulp.dest(gulp.config.buildPath))
	;
});

gulp.task('less-prod', function () {
	gulp.src(gulp.config.libPath + '/*.less')
		.pipe(less(deepExtend({
			compress: true
		},options)))
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(gulp.config.buildPath))
	;
});
