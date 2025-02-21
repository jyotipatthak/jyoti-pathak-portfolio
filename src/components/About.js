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
    
      <CanvaEmbed />

  </section>
);

export default About;
