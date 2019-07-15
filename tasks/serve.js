import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task(`serve`, () => {
  browsersync.init({
    server: `./build`,
    port: 4000,
    notify: true,
  });
});
