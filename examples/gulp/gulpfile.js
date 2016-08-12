var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// ------------------------------------------------------

gulp.task('styles', [], function () {
  return gulp.src('styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 5%'] }))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// ------------------------------------------------------

gulp.task('scripts', [], function () {
  // TODO: Glob all scripts.
  // TODO: Init sourcemaps.
  // TODO: Add "uglify" action.
  // TODO: Add "concat" action.
  // TODO: Write sourcemaps.
  // TODO: Output everything to "dist/".
});

// ------------------------------------------------------

gulp.task('watch', ['styles', 'scripts'], function () {
  gulp.watch('styles/**.scss', ['styles']);
  gulp.watch('scripts/**.js', ['scripts']);
});

// ------------------------------------------------------

// source: https://www.browsersync.io/docs/gulp#gulp-sass-css
gulp.task('browsersync', ['styles'], function () {
  browserSync.init({ server: '.' });
  gulp.watch('styles/**.scss', ['styles']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

// ------------------------------------------------------

gulp.task('default', ['styles', 'scripts']);
