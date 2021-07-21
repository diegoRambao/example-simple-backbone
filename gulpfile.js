var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var hbsfy = require('hbsfy');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'hbsfy'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build', 'sass'], function() {
  gulp.watch('src/**/*.*', ['build']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['browserify', 'copy']);