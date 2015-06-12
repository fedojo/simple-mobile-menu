var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('src_es/es6/**/*.es')
        .pipe(babel())
        .pipe(gulp.dest('src_es/scripts'));
});
