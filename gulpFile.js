var gulp = require('gulp');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var css = require('gulp-css');
var cleanCSS = require('gulp-clean-css');
var inject = require('gulp-inject');

gulp.task('inject', function () {
	var target = gulp.src('./app/index.html');

	var sources = gulp
		.src(['./app/schedulingTools/*.js',
			'./app/schedulingTools/features/**/*.js',
			'./app/schedulingTools/layout/assets/style/css/*.css'],
			{read: false},
			{relative: true});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});

gulp.task('syntax', function() {
	return gulp
		.src([
			'./app/schedulingTools/*.js',
			'./app/schedulingTools/features/**/*.js',
			'./appschedulingTools/libraries/*.js',
			'./appschedulingTools/services/*.js',
			'./*.js'
		])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('minify-css', function() {
	return gulp
		.src('app/schedulingTools/layout/assets/style/css/style.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('app/schedulingTools/client'))
})

gulp.task('compress-js', function() {
	return gulp
		.src([
			'./app/**/*.js',
			'./*.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./app/schedulingTools/dist'))
})

gulp.task('sass', function() {
	return gulp
		.src('app/schedulingTools/layout/assets/style/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/schedulingTools/layout/assets/style/css'))
})

gulp.task('watch', function () {
	gulp.watch('app/schedulingTools/layout/assets/style/scss/style.scss', ['sass']);
})