var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var image = require('gulp-css-image-dimensions');

gulp.task('pug', function() {
	gulp.src('./src/pug/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./www'))
});

gulp.task('sass', function() {
	gulp.src('./src/sass/**/*.scss')
	.pipe(image('.'))
	.pipe(sass())
	.pipe(gulp.dest('./www/css'))
});

gulp.task('watch', function() {
	gulp.watch('./src/pug/*.pug', ['pug'])
	gulp.watch('./src/sass/**/*.scss', ['sass'])
});

gulp.task('default', ['pug', 'sass', 'watch']);
