import React from 'react';
import { FaReact, FaNodeJs,  FaJava,  } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { SiExpress, SiGit, SiMongodb } from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';

import { FaHtml5 } from "react-icons/fa";  // HTML Icon
import { SiTailwindcss } from "react-icons/si";  // Tailwind CSS Icon

const skills = [
  {
    icon: <SiMongodb />,
    text: "Mongo"
  },
  {
    icon: <SiExpress />,
    text: "Express"
  },
  {
    icon: <FaReact />,
    text: "React"
  },
  {
    icon: <FaNodeJs />,
    text: "Node.js"
  },
{
    icon: <BsDatabase />,
    text: "MySQL"
  },
  
{
    icon: <SiGit />,
    text: "Git"
  },
  {
    icon: <FaJava />,
    text: "JavaScript"
  },
  {
    icon: <FaHtml5 />,
    text: "HTML"
  },
  {
    icon: <SiTailwindcss />,
    text: "Tailwind CSS"
  },
 
 
];

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div
      className="mid-card-container center-text"
    >
      {skills.map((skill, index) => (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  stiffness: 100, delay: 0.2 * index}}
          key={index} className="card">
          <span className='big-icon'>{skill.icon}</span>
          <p>{skill.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
