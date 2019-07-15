import gulp from "gulp";
import del from "gulp-del";

gulp.task(`del`, () => {
  return del(`./build`);
});
