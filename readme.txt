const gulp = require('gulp');
const stripDebug = require('gulp-strip-debug');
const vinylPaths = require('vinyl-paths');
const changed = require('gulp-changed');
const find = require('gulp-find');
var map = require('map-stream');
var replace = require('gulp-replace');

const SOURCE = '*.html';
const DESTINATION = 'dist';

var imgDes = '';

// Log file paths in the stream
gulp.task('log', () => {
  return gulp.src('src/*')
    .pipe(stripDebug())
    .pipe(vinylPaths(async paths => {
      console.log('Paths:', paths);
    })
    )
});


gulp.task('change1', () => {
  return gulp.src(SOURCE)
    .pipe(changed(DESTINATION))
    .pipe(replace('src/svg/icons8_facebook_old.svg', match => {
      imgDes = match
    }))
});

gulp.task('change2', () => {
  return gulp.src(imgDes)
    .pipe(gulp.dest(DESTINATION))
});

gulp.task('change', gulp.series('change1', 'change2'))
