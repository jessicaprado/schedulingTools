var gulp = require('gulp');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('syntax', function() {
    return gulp
    	.src([
	    	'./app/**/*.js',
	    	'./*.js'
    	])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('compress-js', function(){
	return gulp
		.src([
	    	'./app/**/*.js',
	    	'./*.js'
    	])
    	.pipe(uglify())
    	.pipe(gulp.dest('./app/schedulingTools/dist'))
})