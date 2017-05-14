var gulp = require('gulp');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var css = require('gulp-css');

gulp.task('syntax', function() {
    return gulp
    	.src([
	    	'./app/**/*.js',
	    	'./*.js'
    	])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('css', function() {
	gulp
	.src('.app/schedulingTools/layout/assets/style/css')
	.pipe(cssMin())
	.pipe(gulp.dest('.app/schedulingTools/layout/assets/style/css'))
})

gulp.task('compress-js', function(){
	return gulp
		.src([
	    	'./app/**/*.js',
	    	'./*.js'
    	])
    	.pipe(uglify())
    	.pipe(gulp.dest('./app/schedulingTools/dist'))
})

gulp.task('sass', function(){
	return gulp
		.src('.app/schedulingTools/layout/assets/style/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('.app/schedulingTools/layout/assets/style/css'))
})