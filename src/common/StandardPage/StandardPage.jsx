import React from "react";
import HtmlDoc from "../HtmlDoc/HtmlDoc";

const StandardPage = ({doc, headerTitle, navContent, children, mainHeader}) => {
  const docProps = {
    title: "t3hz0r",
    favicon: "/t3h-assets/common/favicon.png",
    ...doc,
    styles: [
      "/t3h-assets/normalize.css/normalize.css",
      "/t3h-assets/common/common-bundle.css",
      ...doc.styles
    ],
  };

  return (
    <HtmlDoc {...docProps}>
      <nav className="site-navigation">
        <div className="nav-elements">
          {headerTitle &&
            <div id="nav-title">{headerTitle}</div>
          }
          {navContent &&
            <div id="nav-links">{navContent}</div>
          }
        </div>
      </nav>
      {mainHeader &&
        <header className="main-header">
          {mainHeader}
        </header>
      }
      <main className="main-content">
        {children}
      </main>
    </HtmlDoc>
  );
};

export default StandardPage;
