import React from "react";

export default function Footer() {
  const links = [
    {
      name: "github",
      link: "https://github.com/HumzaShaukat",
    },
    {
      name: "linkedIn",
      link: "https://www.linkedin.com/in/humza-shaukat/",
    },
  ];

  return (
    <footer>
      {links.map((link) => (
        <a
          href={link.link}
          key={link.name}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.name}
          <i className={link.name}></i>
        </a>
      ))}
    </footer>
  );
}
