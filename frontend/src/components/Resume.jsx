import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import './Resume.css';
import backgroundImage from '../assets/norbert-kowalczyk-dFHjgp-5woo-unsplash.jpg';

const cards = [
  {
    id: 'summary',
    title: 'Professional Summary',
    content: (
      <p>
        Builder with hands-on experience developing and deploying a full-stack
        retail POS system, paired with real-world operations and customer-facing
        experience. Currently pursuing a pharmacy technician certification to
        build domain knowledge in healthcare, with the goal of moving into
        freelance software development and eventually selling SaaS products
        into the healthcare space.
      </p>
    ),
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: (
      <>
        <div className="experience-entry">
          <h4>Kroger — Courtesy Clerk / Grocery Stock Associate</h4>
          <span className="experience-date">August 2022 – Present</span>
          <ul>
            <li>Stocked dairy, frozen, and grocery departments while maintaining inventory accuracy and store presentation.</li>
            <li>Assisted customers and supported front-end operations through bagging and cart retrieval.</li>
            <li>Worked across multiple departments to meet operational needs during high-volume periods.</li>
          </ul>
        </div>
        <div className="experience-entry">
          <h4>Portillos — Restaurant Team Member</h4>
          <span className="experience-date">September 2025 – Present</span>
          <ul>
            <li>Prepared food in a fast-paced, high-volume restaurant while maintaining quality and food safety standards.</li>
            <li>Collaborated with team members to meet production goals during peak demand.</li>
            <li>Maintained consistency, accuracy, and efficiency under time-sensitive conditions.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    content: (
      <ul>
        <li><strong>Languages:</strong> Python, SQL, JavaScript, HTML, CSS</li>
        <li><strong>Frameworks:</strong> Flask, Flask-SQLAlchemy</li>
        <li><strong>Databases:</strong> PostgreSQL, SQLite</li>
        <li><strong>Tools:</strong> Git, GitHub, Render, Gunicorn</li>
        <li><strong>Concepts:</strong> REST APIs, Authentication, RBAC, Database Design, Inventory Systems</li>
      </ul>
    ),
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    content: (
      <ul>
        <li>Customer service under high-volume, time-sensitive conditions</li>
        <li>Cross-department collaboration</li>
        <li>Attention to detail and accuracy</li>
        <li>Adaptability across operational roles</li>
      </ul>
    ),
  },
];

function Resume() {
  const [emblaRef] = useEmblaCarousel({ align: 'center', containScroll: 'trimSnaps' });

  return (
    <section
      id="resume"
      className="resume-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="resume-layout">
        <div className="resume-side">
          <h2 className="resume-title">Resume</h2>
        </div>

        <div className="resume-divider"></div>

        <div className="resume-content">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  className="embla__slide resume-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <h3>{card.title}</h3>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;