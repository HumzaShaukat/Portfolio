import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "About Me",
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </Header>
      <main>
        <Content currentPage={currentPage}></Content>
      </main>
      <Footer />
    </div>
  );
}

export default App;
