var gulp = require('gulp');
var ts = require('gulp-typescript');

var buildpath = './dist';
 
gulp.task('ts', function () {
    return gulp.src('./ts/*.ts');
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('built/local'));
});