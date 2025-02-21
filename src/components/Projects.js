import React from 'react';
import { motion } from 'framer-motion';
// import './Projects.css';

const projects = [
 {
    title: "Crypto Dashboard",
    description: "Designed and show the live data of currencies using React, delivering a smooth and engaging user experience. Focused on responsiveness, modern, and extensive for a seamless user experience.",
    link: " https://jyotipatthak.github.io/crypto-dashboard/"
  },
  {
    title: "wishmart.vercel.app",
    description: "Developed a wishmart application featuring intuitive user interfaces and efficient E-shopping website . providing secure authentication .",
    link: "https://wishmart.vercel.app/"
  },
  {
    title: "flipkart clone",
    description: "Developed a comprehensive flipkart e-commerse application featuring intuitive user interfaces and efficient functionalities. Integrated a robust back-end using Node.js and express js, providing secure authentication and seamless task CRUD operations.",
    link: "https://flipkartt-beta.vercel.app/"
  },
  {
    title: "Task Management System",
    description: "Developed a comprehensive task management application featuring intuitive user interfaces and efficient task-tracking functionalities. Integrated a robust back-end using Node.js with TypeScript, providing secure authentication and seamless task CRUD operations.",
    link: "https://task-management-system-pi-three.vercel.app/"
  },

  {
    title: "Personal Portfolio",
    description: "Created a professional portfolio website using React, highlighting my skills, projects, and work experiences. The site showcases a modern design, animated interactions, and is fully responsive, ensuring an optimal viewing experience on all devices.",
    link: "http://localhost:3000/jyoti-pathttps://jyoti-pathak-portfolio.vercel.app/"
  }
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects-container card-container"
    >
      {projects.map((project, index) => (
        <div key={index} className="project-card card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className='app-button'>
            View Project
          </a>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Projects;
