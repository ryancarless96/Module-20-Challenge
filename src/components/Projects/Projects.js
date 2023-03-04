import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/main';

function Projects({ projects }) {

  const { name, github, link, description } = projects;

  return (
    <div className="projects" key={name}>
      <img
       
        alt={removeHyphensAndCapitalize(name)}
        className="projects-bg"
      />
      <div className="projects-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={github}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Projects;
