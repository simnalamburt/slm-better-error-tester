var gulp = require('gulp');
var slm = require('gulp-slm');

gulp.task('default', function() {
  gulp.src('gulp.slm')
    .pipe(slm())
    .pipe(gulp.dest('.'));
});
