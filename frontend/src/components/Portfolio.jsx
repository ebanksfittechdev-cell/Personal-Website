import { motion } from 'framer-motion';
import './Portfolio.css';
import projectImage from '../assets/POS.png';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="timeline-date">June 2026</span>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <img src={projectImage} alt="Project screenshot" className="project-image" />
            <h3>Retail POS Inventory System</h3>
            <p>
              A full-stack retail point-of-sale and inventory management system simulating real-world store operations,
              live sales tracking, stock management, shipment orders, and role-based access control across employees, department managers, and store managers. 
              Built with Flask, SQLAlchemy, PostgreSQL, and vanilla JavaScript, with a complete audit log tracking every inventory change by user and timestamp.
              what problem it solves, and what technologies were used to build it.
            </p>
            <br></br>
            <a href="https://retail-pos-system-6j2z.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link">
                View Live Demo →

            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;