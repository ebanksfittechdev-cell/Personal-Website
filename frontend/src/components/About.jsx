import { motion } from 'framer-motion';
import './About.css';
import aboutPhoto from '../assets/unnamed.jpg';

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="about-title">About Me</h2>
        <div className="about-title-line"></div>
        <p className="about-text">
          I'm a full stack developer who likes building things that solve real
          operational problems; my POS system started from watching firsthand
          how much friction exists in retail inventory management, and grew from
          there. 
          
          Right now I'm working toward a pharmacy technician certification,
          aiming to combine that domain knowledge with software to eventually
          build tools for the healthcare space. I'm also getting into machine
          learning and applied ML, exploring how it fits into the kind of
          practical, real-world systems I like to build. Outside of code, I try
          to get to the gym a few times a week; it's become one of the more
          consistent parts of how I structure my time.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <img src={aboutPhoto} alt="Ethan Adragna" className="about-photo" />
        <h3 className="about-name">Ethan Adragna</h3>
        <p className="about-role">Full Stack Developer</p>
      </motion.div>
    </section>
  );
}

export default AboutMe;