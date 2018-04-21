"use strict";

exports.__esModule = true;
exports.buildCopy = exports.buildClean = exports.buildScripts = exports.buildStyles = undefined;

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _del = require("del");

var _del2 = _interopRequireDefault(_del);

var _gulpSass = require("gulp-sass");

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpCleanCss = require("gulp-clean-css");

var _gulpCleanCss2 = _interopRequireDefault(_gulpCleanCss);

var _custom = require("envify/custom");

var _custom2 = _interopRequireDefault(_custom);

var _gulpBabel = require("gulp-babel");

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _gulpUglify = require("gulp-uglify");

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _babelify = require("babelify");

var _babelify2 = _interopRequireDefault(_babelify);

var _gulpRename = require("gulp-rename");

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpBro = require("gulp-bro");

var _gulpBro2 = _interopRequireDefault(_gulpBro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//start fresh!
var buildClean = function buildClean(dest) {
  return function () {
    return (0, _del2.default)(dest);
  };
};

var buildCopy = function buildCopy(src, dest) {
  return function () {
    return _gulp2.default.src(src).pipe(_gulp2.default.dest(dest));
  };
};

//build distributable CSS
var buildStyles = function buildStyles(src, dest) {
  return function () {
    return _gulp2.default.src(src).pipe((0, _gulpSass2.default)()).pipe((0, _gulpCleanCss2.default)({ compatibility: "ie8" })).pipe(_gulp2.default.dest(dest));
  };
};

//build distributable script bundles
var buildScripts = function buildScripts(src, dest) {
  return function () {
    return _gulp2.default.src(src).pipe((0, _gulpBro2.default)({
      extensions: [".js", ".jsx"],
      transform: [_babelify2.default, [(0, _custom2.default)({ NODE_ENV: "production" }), { global: true }]]
    })).pipe((0, _gulpUglify2.default)()).pipe((0, _gulpRename2.default)({ extname: ".js" })).pipe(_gulp2.default.dest(dest));
  };
};

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.buildClean = buildClean;
exports.buildCopy = buildCopy;