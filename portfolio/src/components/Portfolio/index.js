import React, { useState } from "react";
import Project from "../Project";
function Portfolio() {
  //list of projects is current state which is a static list currently.  Eventually can be queried from database
  const [projects] = useState([
    {
      name: "Speeddater",
      description:
        "Utilizes the full MERN stack along with AWS S3 to create a dating app that allows you to connect with other users and hopefully find love",
      link: "https://speeddater.herokuapp.com/",
      repo: "https://github.com/HumzaShaukat/SpeedDater",
    },
    {
      name: "Quiz CR8R",
      description:
        "Utilizes CSS, HTML, HandlebarsJS, expressJS, NodeJS, MySQL and sequelize to create a full stack website used for creating quizzes to assist in studying",
      link: "https://intense-forest-76320.herokuapp.com/login",
      repo: "https://github.com/HumzaShaukat/QuizCR8R",
    },
    {
      name: "TekToday",
      description:
        "Utilized MySQL, Sequelize, NodeJS, ExpressJS, and Express-Handlebars to create a full-stack blog",
      link: "https://github.com/HumzaShaukat/TekToday",
      repo: "https://github.com/HumzaShaukat/TekToday",
    },
    {
      name: "E-Commerce-Back-End",
      description:
        "Utilized Node, ExpressJS, MySQL, and mysql2 to create a backend for an E-Commerce website that tracks all entered products and their related information including price, categories, and tags.",
      link: "https://github.com/HumzaShaukat/E-Commerce-Back-End",
      repo: "https://github.com/HumzaShaukat/E-Commerce-Back-End",
    },
    {
      name: "SocialNetwork-API",
      description:
        "Used Mongoose, MongoDB, Express, and Node to create a backend API for a social network that allows for user, thought, and reaction creation as well as adding and removing friends.",
      link: "https://github.com/HumzaShaukat/SocialNetwork-API",
      repo: "https://github.com/HumzaShaukat/SocialNetwork-API",
    },
    {
      name: "Note Taker",
      description:
        "Created an application to create and store notes for a user using Node and ExpressJS",
      link: "https://gentle-depths-71408.herokuapp.com/",
      repo: "https://github.com/HumzaShaukat/NoteTaker",
    },
    {
      name: "Space Encyclopedia",
      description:
        "Created frontend application using HTML, CSS, and JavaScript that uses the Wikipedia and NASA images APIs.",
      link: "https://humzashaukat.github.io/SpaceEncyclopedia/",
      repo: "https://github.com/HumzaShaukat/SpaceEncyclopedia",
    },
  ]);

  return (
    <div>
      <div className="portfolio">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
