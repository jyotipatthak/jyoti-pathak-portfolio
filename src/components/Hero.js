import React from 'react';
import { motion } from 'framer-motion';
// import heroImage from '../assets/hero.png'; // Add your profile or hero image in the assets folder
import './Hero.css';

const Hero = () => {
  // Animation variants for text and image
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for children
        delayChildren: 0.5, // Delay before starting children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <section className="hero">
      <div className="card-container">
        {/* Hero Image with Animation */}
        <motion.img
          src="" // Add your image source here
          alt="Jyoti"
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Hero Text with Animation */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>
            Hello, world! 🌍
          </motion.h2>
          <motion.p variants={itemVariants}>
            I'm Jyoti, a full-stack software engineer with a passion for turning complex problems into simple, elegant solutions. Whether I'm coding up sleek apps in React JS or diving deep into the backend with Express JS and Node.js, I’m always on the lookout for my next big challenge.
          </motion.p>
          <motion.p variants={itemVariants}>
            When I'm not coding, you’ll probably find me exploring the latest manga, indulging in epic fantasy novels, or dreaming about my next travel adventure. I believe that just like in coding, every journey—whether through a story or a new place—is a chance to learn something new. 💡
          </motion.p>
          <motion.p variants={itemVariants}>
            Let's connect and build something awesome together! 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;