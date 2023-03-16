import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const links = [
    {
      name: "github",
      icon: faGithub,
      link: "https://github.com/HumzaShaukat",
    },
    {
      name: "linkedin",
      icon: faLinkedin,
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
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </footer>
  );
}
