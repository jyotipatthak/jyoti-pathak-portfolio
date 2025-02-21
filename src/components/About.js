import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBookOpen, FaPlaneDeparture, FaHandshake } from "react-icons/fa";


const CanvaEmbed = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "8px",
        willChange: "transform",
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          border: "none",
          padding: 0,
          margin: 0,
        }}
        src=""
        allowFullScreen
        title="Canva Design Embed"
      ></iframe>
    </div>
  );
};


const About = () => (
  <section className="about">
    <h2>About Me</h2>
    
    Hi, I’m JYOTI PATHAK, a passionate web developer with a knack for crafting clean, functional, and visually engaging digital experiences. As a GATE-qualified professional, I bring a strong foundation in computer science and a problem-solving mindset to every project I undertake.

I’m deeply interested in the intersection of technology and social impact. Whether it’s building platforms that empower communities, creating tools for education, or contributing to open-source projects, I strive to use my skills to make a positive difference. I’m also an active LinkedIn enthusiast, where I share insights on web development, tech trends, and the role of technology in driving social change.

When I’m not coding, you’ll find me exploring ways to connect with like-minded professionals, collaborating on socially impactful initiatives, or diving into discussions about how technology can address real-world challenges. Let’s connect and build something meaningful together!

This version highlights your technical expertise, social interests, and LinkedIn presence, making it perfect for your portfolio. Let me know if you'd like further tweaks!

  </section>
);

export default About;
