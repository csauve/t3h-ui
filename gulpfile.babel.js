import gulp from "gulp";
import babel from "gulp-babel";
import {buildStyles, buildScripts, buildClean, buildCopy} from "./src/utils/gulp-helpers.js";

const vendorLibs = ["react", "react-dom"];
const paths = {
  copiedAssets: [
    "./src/**/*.+(jpg|png)",
    "./node_modules/+(normalize.css)/normalize.css"
  ],
  commonScriptsAssets: ["./src/+(common)/common-bundle.js"],
  otherScriptsAssets: ["./src/!(common)/*-bundle.js"],
  stylesAssets: ["./src/**/*-bundle.scss"],
  scriptsLib: ["./src/**/*.js", "./src/**/*.jsx"],
  stylesLib: ["./src/**/*.css", "./src/**/*.scss"],
  libDist: "./lib",
  assetDist: "./t3h-assets"
};

gulp.task("clean", buildClean([paths.libDist, paths.assetDist]));
gulp.task("commonScriptsAssets", buildScripts(paths.commonScriptsAssets, paths.assetDist, {
  require: vendorLibs,
}));
gulp.task("otherScriptsAssets", buildScripts(paths.otherScriptsAssets, paths.assetDist, {
  external: vendorLibs
}));
gulp.task("stylesAssets", buildStyles(paths.stylesAssets, paths.assetDist));
gulp.task("copiedAssets", buildCopy(paths.copiedAssets, paths.assetDist));
gulp.task("stylesLib", buildCopy(paths.stylesLib, paths.libDist));
gulp.task("scriptsLib", () =>
  gulp.src(paths.scriptsLib)
  .pipe(babel())
  .pipe(gulp.dest(paths.libDist))
);

gulp.task("default", gulp.series("clean", gulp.parallel(
  "commonScriptsAssets",
  "otherScriptsAssets",
  "stylesAssets",
  "copiedAssets",
  "stylesLib",
  "scriptsLib",
)));
