import { motion } from 'framer-motion';
import './Home.css';
import backgroundImage from '../assets/milad-fakurian-JTKKRK05NAM-unsplash.jpg';
import profilePhoto from '../assets/IMG_0011.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: .3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        className="home-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.img
          variants={item}
          src={profilePhoto}
          alt="Your Name"
          className="profile-photo"
        />
        <motion.h1 variants={item}>Ethan Adragna</motion.h1>
        <motion.p variants={item}>Full Stack Developer</motion.p>
        <motion.div className="social-links" variants={item}>
          <a href="https://www.linkedin.com/in/ethan-adragna-204b09364/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ebanksfittechdev-cell" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;