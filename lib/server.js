"use strict";

exports.__esModule = true;
exports.renderDocStream = exports.renderDocStatic = undefined;

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDocStatic = function renderDocStatic(Component, props) {
  return "<!DOCTYPE html>" + _server2.default.renderToStaticMarkup(_react2.default.createElement(Component, props));
};

var renderDocStream = function renderDocStream(res, Component, props) {
  res.type("text/html");
  res.write("<!DOCTYPE html>");
  var pageStream = _server2.default.renderToStaticNodeStream(_react2.default.createElement(Component, props));
  pageStream.pipe(res, { end: true });
};

exports.renderDocStatic = renderDocStatic;
exports.renderDocStream = renderDocStream;