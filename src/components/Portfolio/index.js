import React, { useState } from 'react';
// import img from "../../assets/projects/"
import codingJobs from '../../assets/projects/coding-jobs.png';
import budgetTracker from '../../assets/projects/budget-tracker.png';
import SoundBord from '../../assets/projects/musical-soundbored.png';
import TPG from '../../assets/projects/team-generator.png';
import techBlog from '../../assets/projects/tech-blog.png';
import workDay from '../../assets/projects/day-planner.png';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'coding-jobs',
      description: 'Project 2',
      link: "https://coding-jobs-345234.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/project-2",
      image: codingJobs
    },
    {
      name: 'musical-soundbored',
      description: 'Project 1',
      link: "https://athaight.github.io/group-project-one/",
      repo: "https://github.com/sophiedeskin/Musical-Soundboard",
      image: SoundBord
    },
    {
      name: 'team-generator',
      description: 'TPG Description',
      link: "https://drive.google.com/file/d/1S_VpZPxi1399UQ5gNNWmF6-WeM1czY7D/preview",
      repo: "https://github.com/sophiedeskin/team-profile-generator",
      image: TPG
    },
    {
      name: 'tech-blog',
      description: 'Tech Blog Description',
      link: "https://tech-blog-089345.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/tech-blog",
      image: techBlog
    },
    {
      name: 'day-planner',
      description: 'Work Day Planner Description',
      link: "https://sophiedeskin.github.io/daily-planner/",
      repo: "https://github.com/sophiedeskin/daily-planner",
      image: workDay
    },
    {
      name: 'budget-tracker',
      description: 'Budget Tracker Description',
      link: "https://budget-tracker-68493.herokuapp.com/",
      repo: "https://github.com/sophiedeskin/budget-tracker",
      image: budgetTracker

    },
  ]);

  return (
    <div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {projects.map((project) => (
          <Project
            project={project}
            key={"project"}
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