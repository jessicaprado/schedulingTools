var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('syntax', function() {
    return gulp
    	.src([
	    	'./app/**/*.js',
	    	'./*.js'
    	])
        .pipe(jscs())
        .pipe(jscs.reporter());
});