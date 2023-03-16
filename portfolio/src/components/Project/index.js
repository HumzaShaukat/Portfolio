import React from "react";

//creates the cards for each project
export default function Project({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={require(`../../assets/cards/${name}.jpg`)} alt={name} />
      </a>
      <h3>{name}</h3>
      <a href={repo}>Repo</a>
      <p className="bold">Summary:</p>
      <p>{description}</p>
    </div>
  );
}
