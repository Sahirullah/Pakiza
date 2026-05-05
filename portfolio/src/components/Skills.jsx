import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skills = [
    {
      icon: '🎨',
      name: 'Photoshop',
      description: 'Photo Editing & Compositing',
      level: 85,
      proficiency: 'Expert'
    },
    {
      icon: '✏️',
      name: 'Illustrator',
      description: 'Vector & Logo Design',
      level: 90,
      proficiency: 'Expert'
    },
    {
      icon: '🎭',
      name: 'Figma',
      description: 'UI/UX & Prototyping',
      level: 49,
      proficiency: 'Learning'
    },
    {
      icon: '📱',
      name: 'Canva',
      description: 'Social & Print Design',
      level: 86,
      proficiency: 'Expert'
    }
  ]

  const stats = [
    { number: '80+', label: 'Graphic Design' },
    { number: '10+', label: 'Brand Design' },
    { number: '20+', label: 'Visual Design' },
    { number: '15+', label: 'Print Design' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          className="section-label-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">TOOLBOX</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle">Tools I use to turn ideas into structured visual systems</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>

              <div className="skill-progress-section">
                <div className="skill-progress-circle">
                  <svg viewBox="0 0 100 100" className="progress-svg">
                    <circle cx="50" cy="50" r="45" className="progress-bg" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="progress-fill"
                      initial={{ strokeDashoffset: 283 }}
                      animate={inView ? { strokeDashoffset: 283 - (283 * skill.level) / 100 } : {}}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </svg>
                  <div className="progress-text">
                    <span className="percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="proficiency">
                  <span className="proficiency-dot">●</span>
                  <span className="proficiency-label">{skill.proficiency}</span>
                  <span className="proficiency-level">Proficiency level</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="stat">
              <h4>{stat.number}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Know More Button */}
        <motion.div
          className="skills-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="btn-know-more">Know More →</button>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="skills-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Continuously learning and expanding my design toolkit +
        </motion.p>
      </div>
    </section>
  )
}
