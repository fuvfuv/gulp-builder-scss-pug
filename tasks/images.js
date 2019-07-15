import gulp from "gulp";
import imagemin from "gulp-imagemin";
import imageminJpegRecompress from "imagemin-jpeg-recompress";
import imageminPngquant from "imagemin-pngquant";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";

const imgPath = {
  input: `./assets/static/images/**/*.{png,jpg,gif}`,
  ouput: `./build/images`,
};

const imageminConfig = [
  imagemin.gifsicle({interlaced: true}),
  imageminJpegRecompress({
    progressive: true,
    max: 80,
    min: 70,
  }),
  imageminPngquant({quality: `80`}),
  imagemin.svgo({plugins: [{removeViewBox: true}]}),
];

gulp.task(`img`, () => gulp.src(imgPath.input).pipe(gulp.dest(imgPath.ouput)));

gulp.task(`img:prod`, () =>
  gulp
    .src(imgPath.input)
    .pipe(plumber())
    .pipe(imagemin(imageminConfig))
    .pipe(plumber.stop())
    .pipe(gulp.dest(imgPath.ouput))
    .on(`end`, browsersync.reload)
);
