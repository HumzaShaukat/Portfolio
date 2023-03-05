import React, { useState } from "react";
import Project from "../Project";
function Portfolio() {
  const [projects] = useState([
    {
      name: "Quiz CR8R",
      description:
        "Utilizes CSS, HTML, HandlebarsJS, expressJS, NodeJS, MySQL and sequelize to create a full stack website used for creating quizzes to assist in studying",
      link: "https://intense-forest-76320.herokuapp.com/login",
      repo: "https://github.com/HumzaShaukat/QuizCR8R",
    },
    {
      name: "pastel-puzzels",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "led-wall",
      description: "Node/IoT",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "calculator",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
