import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Certifications.css'

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const certs = [
    {
      id: 1,
      title: 'Adobe Certified Professional',
      issuer: 'Adobe Inc.',
      year: '2025',
      icon: '🎨',
    },
    {
      id: 2,
      title: '1 Month Canva Freelancing Course',
      issuer: 'NextGen Digital University',
      year: '2025',
      icon: '🎯',
    },
    {
      id: 3,
      title: '1 Month Social Media Marketing Course',
      issuer: 'NextGen Digital University',
      year: '2025',
      icon: '📱',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          className="section-label-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">CREDENTIALS</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">My <span className="highlight">Certifications</span></h2>
          <p className="section-subtitle">Internationally recognised credentials in design and brand identity</p>
        </motion.div>

        <motion.div
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(196, 30, 58, 0.2)' }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
