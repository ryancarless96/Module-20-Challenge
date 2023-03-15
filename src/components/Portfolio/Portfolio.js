import React, { useState } from 'react';
import Projects from '../Projects/Projects';

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Ryan Carless',
      description: 'How to Build Websites',
      link: 'https://ryancarless96.github.io/How-to-Build-Websites/',
      github: 'https://github.com/ryancarless96/How-to-Build-Websites'
    },

    {
      name: 'Ryan Carless',
      description: 'Prework',
      link: 'https://ryancarless96.github.io/prework-study-guide/',
      github: 'https://github.com/ryancarless96/prework-study-guide'
    },

    {
      name: 'Ryan Carless',
      description: 'Group-Project-1',
      link: 'https://ryancarless96.github.io/Quiz-Game-Challenge/',
      github: 'https://github.com/ryancarless96/Quiz-Game-Challenge'
    },

    {
      name: 'Ryan Carless',
      description: 'Group-Project-2',
      link: 'https://safe-eyrie-62856.herokuapp.com/login',
      github: 'https://github.com/lesley-byte/videogame-review'
    }
  ]);

  

  return (
    <div>
      <div className="flex-row">
        {projects.map((projects, idx) => (
          <Projects
            projects={projects}
            key={"projects" + idx}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;


