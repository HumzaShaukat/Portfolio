import React from "react";
import resume from "../../assets/resume/CS_Resume_Humza_Shaukat_2023.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <h3>
        <a href={resume} target="_blank" rel="noreferrer">
          Download My Resume
        </a>
      </h3>
      <div className="proficiencies">
        <h4>Front-end Skills</h4>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Back-end Skills</h4>
        <ul className="skills">
          <li>APIs</li>
          <li>C++</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MySql, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Python</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <h4>Statistical Skills</h4>
        <ul className="skills">
          <li>MATLAB</li>
          <li>Pandas</li>
          <li>R</li>
        </ul>
      </div>
    </div>
  );
}
