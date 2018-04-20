import React from "react";
import HtmlDoc from "../HtmlDoc/HtmlDoc";

const StandardPage = ({doc, headerTitle, navContent, children}) => {
  const docProps = {
    title: "t3hz0r",
    favicon: "/t3h-assets/favicon.png",
    ...doc,
    styles: [
      "/t3h-assets/normalize.css",
      "/t3h-assets/source-sans-pro/source-sans-pro.css",
      ...doc.styles
    ],
  };

  return (
    <HtmlDoc {...docProps}>
      <header className="site-header">
        {headerTitle &&
          <div id="header-title">{headerTitle}</div>
        }
        {navContent &&
          <nav id="header-nav">{navContent}</nav>
        }
      </header>
      <main>
        {children}
      </main>
    </HtmlDoc>
  );
};

export default StandardPage;