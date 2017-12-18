import ReactDOMServer from "react-dom/server";
import React from "react";
import Html from "./Html";

//todo
const isomorphic = function(Component) {
  return (initialProps = {}) => (
    <React.Fragment>
      <div id="mountpoint">
        <Component {...initialProps}/>
      </div>
      <script
        id="initial-props"
        type="application/json"
        dangerouslySetInnerHTML={{__html: serialize(initialProps, {isJSON: true})}}
      />
    </React.Fragment>
  );
};

const renderPageStream = function(res, pageId, initialProps) {
  res.type("text/html");
  res.write("<!DOCTYPE html>");
  const pageStream = ReactDOMServer.renderToNodeStream(
    <Html
      pageId={pageId}
      title={"omnom"}
      manifest={assetManifest}
      initialProps={initialProps}
    />
  );
  pageStream.pipe(res, {end: true});
};

export {renderPageStream};