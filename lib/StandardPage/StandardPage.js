"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _HtmlDoc = require("../HtmlDoc/HtmlDoc");

var _HtmlDoc2 = _interopRequireDefault(_HtmlDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandardPage = function StandardPage(_ref) {
  var doc = _ref.doc,
      headerTitle = _ref.headerTitle,
      navContent = _ref.navContent,
      children = _ref.children;

  var docProps = _extends({
    title: "t3hz0r",
    favicon: "/t3h-assets/favicon.png"
  }, doc, {
    styles: ["/t3h-assets/normalize.css", "/t3h-assets/source-sans-pro/source-sans-pro.css"].concat(doc.styles)
  });

  return _react2.default.createElement(
    _HtmlDoc2.default,
    docProps,
    _react2.default.createElement(
      "header",
      { className: "site-header" },
      headerTitle && _react2.default.createElement(
        "div",
        { id: "header-title" },
        headerTitle
      ),
      navContent && _react2.default.createElement(
        "nav",
        { id: "header-nav" },
        navContent
      )
    ),
    _react2.default.createElement(
      "main",
      null,
      children
    )
  );
};

exports.default = StandardPage;