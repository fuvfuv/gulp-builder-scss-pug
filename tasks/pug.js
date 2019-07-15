import gulp from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";

const pugPath = {
  input: `./assets/pug/*.pug`,
  output: `./build/`,
};

gulp.task(`pug`, () => {
  return gulp
    .src(pugPath.input)
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(pugPath.output))
    .on(`end`, browsersync.reload);
});

gulp.task(`pug:prod`, () => {
  return gulp
    .src(pugPath.input)
    .pipe(plumber())
    .pipe(pug({pretty: false}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(pugPath.output))
    .on(`end`, browsersync.reload);
});
