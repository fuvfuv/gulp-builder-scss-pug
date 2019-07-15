import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";

const cssPath = {
  input: `./assets/static/styles/style.css`,
  output: `./build/css`,
};

const autoprefixerConfig = {
  grid: true,
  overrideBrowserslist: [`last 10 versions`],
};

gulp.task(`css`, () => {
  return gulp
    .src(cssPath.input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(cssPath.ouput))
    .on(`end`, browsersync.reload);
});

gulp.task(`css:prod`, () => {
  return gulp
    .src(cssPath.input)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(mincss({level: {1: {specialComments: 0}}}))
    .pipe(rename(`style.min.css`))
    .pipe(gulp.dest(cssPath.ouput));
});
