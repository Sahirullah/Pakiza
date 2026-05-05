import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Certifications.css'

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const certs = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️',
    },
    {
      id: 2,
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2022',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      year: '2021',
      icon: '💻',
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
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Certifications
        </motion.h2>

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
