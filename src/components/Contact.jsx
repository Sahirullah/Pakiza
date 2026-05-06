import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Seeratum281@gmail.com')
  }

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          className="section-label-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">AVAILABLE FOR WORK</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">Ready to Build a Brand</h2>
          <h2 className="section-title highlight-title"><span className="highlight">That Sells?</span></h2>
          <p className="section-subtitle">Let's turn your vision into a high-authority identity. Reach out and let's start the conversation.</p>
        </motion.div>

        {/* Contact Box */}
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info-row">
            <div className="contact-info-item">
              <span className="info-icon">📧</span>
              <div>
                <p className="info-label">EMAIL</p>
                <p className="info-value">Seeratum281@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="info-icon">💬</span>
              <div>
                <p className="info-label">WHATSAPP</p>
                <p className="info-value">+92 3237092655</p>
              </div>
            </div>
          </div>

          <p className="reach-out-text">reach out via</p>

          <div className="contact-buttons">
            <motion.button
              className="btn-copy-email"
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📋 Copy Email
            </motion.button>
            <motion.button
              className="btn-whatsapp"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💬 Chat on WhatsApp
            </motion.button>
          </div>

          <p className="response-time">⏱️ Usually responds within 24 hours</p>
        </motion.div>
      </div>
    </section>
  )
}
