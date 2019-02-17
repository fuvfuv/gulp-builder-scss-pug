const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');

module.exports = function () {
  $.gulp.task('styles', function () {
    return $.gulp.src('./assets/static/styles/style.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(gulpif($.production, autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      })))
      .pipe(gulpif($.production, csso()))
      .pipe(sourcemaps.write())
      .pipe(rename('style.min.css'))
      .pipe($.gulp.dest('build/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });
}