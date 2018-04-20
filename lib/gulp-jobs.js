import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import envify from "envify/custom";
import uglify from "gulp-uglify";
import babelify from "babelify";
import rename from "gulp-rename";
import bro from "gulp-bro";

const t3hAssets = [
  "./node_modules/t3h-ui/lib/assets/**/*",
  "./node_modules/t3h-ui/node_modules/normalize.css/normalize.css",
  "./node_modules/t3h-ui/node_modules/+(source-sans-pro)/source-sans-pro.css",
  "./node_modules/t3h-ui/node_modules/+(source-sans-pro)/**/*.+(woff|woff2|otf|ttf|eot)",
];

//start fresh!
const buildClean = (dest) => () =>
  del(dest);

const buildCopy = (src, dest) => () =>
  gulp.src(src)
  .pipe(gulp.dest(dest));

//build distributable CSS
const buildStyles = (src, dest) => () =>
  gulp.src(src)
  .pipe(sass())
  .pipe(cleanCSS({compatibility: "ie8"}))
  .pipe(gulp.dest(dest));

//build distributable script bundles
const buildScripts = (src, dest) => () =>
  gulp.src(src)
  .pipe(bro({
    extensions: [".js", ".jsx"],
    transform: [
      babelify,
      [envify({NODE_ENV: "production"}), {global: true}]
    ]
  }))
  .pipe(uglify())
  .pipe(rename({extname: ".js"}))
  .pipe(gulp.dest(dest));

export {buildStyles, buildScripts, buildClean, buildCopy, t3hAssets};