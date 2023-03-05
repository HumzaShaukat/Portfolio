import React from "react";

function Header(props) {
  return (
    <header>
      <div className="info">
        <h1>Humza Arsalan Shaukat</h1>
        <h3>South Plainfield, New Jersey</h3>
        <h3>
          <a href="mailto: humzas@umich.edu">humzas@umich.edu</a>
        </h3>
        <h3>734-233-8679</h3>
      </div>
      {props.children}
    </header>
  );
}
export default Header;
