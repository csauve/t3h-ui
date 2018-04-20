import React from "react";
import HtmlDoc from "../HtmlDoc/HtmlDoc.jsx";

const StandardPage = ({doc, headerTitle, navContent, children}) => {
  const docProps = {
    title: "t3hz0r",
    favicon: "/favicon.png",
    ...doc,
    styles: [
      "/normalize.css",
      "/source-sans-pro/source-sans-pro.css",
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