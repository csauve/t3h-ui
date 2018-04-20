import ReactDOMServer from "react-dom/server";
import React from "react";

const renderDocStatic = function(Component, props) {
  return "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(
    <Component {...props}/>
  );
};

const renderDocStream = function(res, Component, props) {
  res.type("text/html");
  res.write("<!DOCTYPE html>");
  const pageStream = ReactDOMServer.renderToStaticNodeStream(
    <Component {...props}/>
  );
  pageStream.pipe(res, {end: true});
};

export {renderDocStatic, renderDocStream};