import React from "react";
import AboutMe from "../About/index.js";
import Portfolio from "../Portfolio/index.js";
import Contact from "../Contact/index.js";
import Resume from "../Resume/index.js";
import Page from "../Page/index.js";

function Content({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section>
      <h2 className="about">{currentPage.name}</h2>
      <Page>{renderPage()}</Page>
    </section>
  );
}
export default Content;
