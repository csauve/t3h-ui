const del = require("del");
const gulp = require("gulp");
const babel = require("gulp-babel");

const paths = {
  assets: [
    "./src/t3h-assets/**/*",
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/+(source-sans-pro)/source-sans-pro.css",
    "./node_modules/+(source-sans-pro)/**/*.+(woff|woff2|otf|ttf|eot)",
  ],
  scripts: ["./src/**/*.jsx", "./src/**/*.js"],
  styles: ["./src/**/*.css", "./src/**/*.scss"],
  libDist: "./lib",
  assetDist: "./t3h-assets"
};

const clean = () =>
  del([paths.libDist, paths.assetDist]);

const styles = () =>
  gulp.src(paths.styles)
  .pipe(gulp.dest(paths.libDist));

const scripts = () =>
  gulp.src(paths.scripts)
  .pipe(babel())
  .pipe(gulp.dest(paths.libDist));

const assets = () =>
  gulp.src(paths.assets)
  .pipe(gulp.dest(paths.assetDist));

gulp.task("default", gulp.series(clean, gulp.parallel(scripts, styles, assets)));