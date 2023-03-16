import React, { useEffect } from "react";

function Navigation(props) {
  //destructures variable from props
  const { pages = [], setCurrentPage, currentPage } = props;
  //changes the document title based off of page name
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);
  return (
    <nav>
      <ul className="nav">
        {pages.map((Page) => (
          <li key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
