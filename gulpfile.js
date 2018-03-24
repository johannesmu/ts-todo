var gulp = require('gulp');
var ts = require('gulp-typescript');
var scss = require('gulp-sass');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var prettify = require('gulp-prettify');
var runsequence = require('run-sequence');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

var buildpath = './dist';

gulp.task('ts', function () {
    return gulp.src('./ts/*.ts')
        .pipe(ts({
            //noImplicitAny: true,
            module: 'amd',
            outFile: 'main.js'
        }))
        .pipe(gulp.dest(buildpath+'/js'));
});

gulp.task('html', function () {
    return gulp.src('./templates/*.pug')
    .pipe(pug())
    .pipe(prettify())
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest(buildpath));
});

gulp.task('sass', () => {
  return gulp.src('./scss/*.scss')
  .pipe(scss())
  .pipe(plumber())
  .pipe(browserSync.reload({stream: true}))
  .pipe(gulp.dest(buildpath+'/styles'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: buildpath
    },
  })
});

gulp.task('assets', function(){
	return gulp.src(['./assets/*.jpg','./assets/*.svg','./assets/*.png'])
	.pipe(gulp.dest(buildpath+'/images'));
});

gulp.task('build', ['html','sass','ts']);

gulp.task('watch', function(){
  runsequence('sass','html','ts','assets','browserSync',function(e){
      //not yet anything
  });
  gulp.watch('./scss/*.scss',['sass']);
  gulp.watch('./templates/*.pug',['html']);
  gulp.watch('./ts/*.ts',['ts']);
});
