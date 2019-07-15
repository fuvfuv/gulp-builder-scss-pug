import gulp from "gulp";
import webpack from "webpack-stream";
import browsersync from "browser-sync";

const jsPath = {
  input: `./assets/static/js/index.js`,
  ouput: `./build/js/`,
};

const webpackConf = {
  // mode: $.production ? `production` : `development`,
  // devtool: $.production ? `none` : `source-map`,
  output: {
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: `/node_modules/`,
      },
    ],
  },
};

gulp.task(`js`, () => {
  return gulp
    .src(jsPath.input)
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest(jsPath.ouput))
    .on(`end`, browsersync.reload);
});

gulp.task(`js:prod`, () => {
  return gulp
    .src(jsPath.input)
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest(jsPath.ouput));
});
