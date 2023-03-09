import React from "react";

export default function Project({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div className="card">
      <a href={link} target="_blank">
        <img src={require(`../../assets/cards/${name}.jpg`)} alt={name} />
      </a>
      <a href={repo}>Repo</a>
      <p>Summary: {description}</p>
    </div>
  );
}
