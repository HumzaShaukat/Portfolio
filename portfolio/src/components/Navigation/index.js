import React, { useEffect } from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);
  return (
    <nav>
      <ul className="nav">
        {pages.map((Page) => (
          <li
            className={`${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
