var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/minify'));
});

gulp.task('watch', function() {
    gulp.watch('assets/css/*.css', ['minify-css']);
});