import React, { useState } from 'react';

import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'coding-jobs',
      description: 'Project 2',
      link: "https://coding-jobs-345234.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/project-2"
    },
    {
      name: 'musical-soundbored',
      description: 'Project 1',
      link: "https://athaight.github.io/group-project-one/",
      repo: "https://github.com/sophiedeskin/Musical-Soundboard"
    },
    {
      name: 'team-profile-generator',
      description: 'TPG Description',
      link: "https://drive.google.com/file/d/1S_VpZPxi1399UQ5gNNWmF6-WeM1czY7D/preview",
      repo: "https://github.com/sophiedeskin/team-profile-generator"
    },
    {
      name: 'tech-blog',
      description: 'Tech Blog Description',
      link: "https://tech-blog-089345.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/tech-blog"
    },
    {
      name: 'work-day-planner',
      description: 'Work Day Planner Description',
      link: "https://sophiedeskin.github.io/daily-planner/",
      repo: "https://github.com/sophiedeskin/daily-planner"
    },
    {
      name: 'budget-tracker',
      description: 'Budget Tracker Description',
      link: "https://budget-tracker-68493.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/budget-tracker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};


// export default function Portfolio() {
//     return (
//         <div>
            
//         </div>
//     )
// }


export default Portfolio;