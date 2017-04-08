var gulp = require('gulp');

gulp.task('watch', function () {
    var watcher = gulp.watch('*.js');
    watcher.on ('change', function (event) {
        console.log("File " + event.path + " was changed")
    });
});

gulp.task('default', function() {
    console.log("runnin... runnin")
});