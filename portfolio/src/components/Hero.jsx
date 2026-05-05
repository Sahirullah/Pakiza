import { motion } from 'framer-motion'
import heroImage from '../assets/mypic.jpeg'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="social-icons">
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🎵</a>
            <a href="#" className="social-icon">💼</a>
            <a href="#" className="social-icon">👍</a>
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            🎯 Brand Designer • Certified • Available for Work
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="hero-title">
            I Build <span className="highlight">Authority-Driven</span> Brands for Coaches, Educators & Digital Academies
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            If your brand looks average, your audience assumes your value is average. I <span className="bold">fix that</span> with strategic positioning and premium visual identity.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="hero-stats">
            <div className="stat-badge">✓ Internationally Certified</div>
            <div className="stat-badge">🧠 Psychology-Backed Design</div>
            <div className="stat-badge">⭐ 10+ Brands Built</div>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image with Badges */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            <motion.div
              className="image-wrapper"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img src={heroImage} alt="Profile" className="profile-image" />
            </motion.div>

            {/* Badges around image */}
            <div className="badge top-badge">10+ Brands Built</div>
            <div className="badge right-badge">4.5★</div>
            <div className="badge bottom-badge">100% Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
