import React from "react";
import pages from "../client/pages";
import serialize from "serialize-javascript";

const Html = ({title, children, initialProps, pageId, manifest}) => {
  const Page = pages[pageId];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href={`/assets/${manifest["app.css"]}`}/>
        {title && <title>{title}</title>}
      </head>
      <body>
        <div id="mountpoint" data-pageid={pageId}>
          <Page {...(initialProps || {})}/>
        </div>

        {initialProps &&
          <script
            id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={{__html: serialize(initialProps, {isJSON: true})}}
          />
        }
        <script type="application/javascript" src={`/assets/${manifest["app.js"]}`}/>
      </body>
    </html>
  );
};

export default Html;