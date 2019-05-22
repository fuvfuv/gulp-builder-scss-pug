const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');
const gulpif = require('gulp-if');
const webpack = require('webpack-stream');

scriptsPath = {
  input: './assets/static/js/index.js',
  ouput: './build/js/',
};

// Библиотеки подключаем в libsJS:dev в массив
// libs = ['node_modules/jquery/dist/jquery.min.js',
//   'node_modules/svg4everybody/dist/svg4everybody.min.js'
// ];


const webpackConf = {
  mode: $.production ? 'production' : 'development',
  devtool: $.production ? 'none' : 'source-map',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  }
};

module.exports = function() {
  $.gulp.task('js', function() {
    return (
      $.gulp
        .src(scriptsPath.input)
        .pipe(webpack(webpackConf))
        .pipe($.gulp.dest(scriptsPath.ouput))
        .on('end', $.browserSync.reload)
    );
  });
};
