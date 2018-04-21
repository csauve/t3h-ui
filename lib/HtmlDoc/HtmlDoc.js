"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HtmlDoc = function HtmlDoc(_ref) {
  var title = _ref.title,
      children = _ref.children,
      styles = _ref.styles,
      scripts = _ref.scripts,
      favicon = _ref.favicon;
  return _react2.default.createElement(
    "html",
    { lang: "en" },
    _react2.default.createElement(
      "head",
      null,
      _react2.default.createElement("meta", { charSet: "UTF-8" }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
      styles && styles.map(function (src) {
        return src && _react2.default.createElement("link", { key: src, rel: "stylesheet", href: src });
      }),
      favicon && _react2.default.createElement("link", { rel: "icon", type: "image/png", href: favicon }),
      title && _react2.default.createElement(
        "title",
        null,
        title
      )
    ),
    _react2.default.createElement(
      "body",
      null,
      children,
      scripts && scripts.map(function (src) {
        return src && _react2.default.createElement("script", { key: src, type: "application/javascript", src: src });
      })
    )
  );
};

exports.default = HtmlDoc;