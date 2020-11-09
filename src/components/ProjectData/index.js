import React, { useState } from 'react';
import ProjectsPage from "../ProjectsPage";

function Portfolio() {


  const [projects] = useState([
    {
      name: 'ZooKeepr',
      category: 'project',
      description: 'Your guide to the wild, this is a zoo animal catalog',
      link: "https://vast-tundra-30091.herokuapp.com/",
      repo: "https://github.com/CucciPro/zookeeper"
    },
    {
      name: 'NoteTaker',
      category: 'project',
      description: 'An application capable of saving notes to a database and displaying said notes.',
      link: "https://note-me-senpai.herokuapp.com/",
      repo: "https://github.com/CucciPro/NoteTaker"
    },
    {
      name: 'WeedIt',
      category: 'project',
      description: 'A gardening assisting site to keep track of growth and status of plants',
      link: "https://weed-it.herokuapp.com/login",
      repo: "https://github.com/CucciPro/proj2-group6-1"
    },
    {
      name: 'Techlite',
      category: 'project',
      description: 'A basic blog to sign up and post tech news. Comment on your favorite posts.',
      link: "https://techlite-blog.herokuapp.com/",
      repo: "https://github.com/CucciPro/TechBlog"
    },
    {
      name: 'RunBuddy',
      category: 'project',
      description: 'A starting point, my first project in web development.',
      link: "https://lernantino.github.io/run-buddy/",
      repo: "https://github.com/CucciPro/Run-Buddy"
    },
  ]);

  return (
    <div>
      <div className="flex-center">
        {projects.map((project, idx) => (
          <ProjectsPage
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
      {/* <Footer></Footer>  */}
    </div>
  );
};

export default Portfolio;

