import gulp from "gulp";
import requireDir from "require-dir";
requireDir(`./tasks`);

const filesPath = {
  pug: `./assets/pug/**/*.pug`,
  fonts: `./assets/static/fonts/**/*`,
  css: `./assets/static/styles/**/*.scss`,
  js: `./assets/static/js/**/*.js`,
  img: `./assets/static/images/**/*`,
};

gulp.task(`watch`, () => {
  gulp.watch(filesPath.pug, gulp.series(`pug`));
  gulp.watch(filesPath.fonts, gulp.series(`fonts`));
  gulp.watch(filesPath.css, gulp.series(`styles`));
  gulp.watch(filesPath.js, gulp.series(`js`));
  gulp.watch(filesPath.img, gulp.series(`img`));
});

gulp.task(`default`, gulp.series(`del`, gulp.parallel(`fonts`, `pug`, `img`, `svg-sprite`, `png-sprite`, `styles`, `js`), gulp.parallel(`watch`, `serve`)));
