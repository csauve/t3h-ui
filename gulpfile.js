const del = require("del");
const gulp = require("gulp");
const babel = require("gulp-babel");

const paths = {
  scripts: ["./src/**/*.jsx", "./src/**/*.js"],
  styles: ["./src/**/*.css", "./src/**/*.scss"],
  dist: ".",
  clean: ["./server", "./components"]
};

const clean = () => del(paths.clean);

const styles = () => gulp.src(paths.styles)
  .pipe(gulp.dest(paths.dist));

const scripts = () => gulp.src(paths.scripts)
  .pipe(babel())
  .pipe(gulp.dest(paths.dist));

gulp.task("default", gulp.series(clean, gulp.parallel(scripts, styles)));