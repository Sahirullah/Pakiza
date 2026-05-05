import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Testimonials.css'

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const testimonials = [
    {
      id: 1,
      text: 'Before working with Seerat, my brand looked like everyone else. After the rebrand, people started taking me seriously. The positioning and visuals completely changed how my audience perceives me.',
      author: 'Ahmed Raza',
      role: 'Business Coach - Aura Academy',
      rating: 5,
      avatar: 'A',
    },
    {
      id: 2,
      text: 'I used to struggle with how my content should look. Now I have a complete system. Everything is consistent, clean, and actually reflects my expertise.',
      author: 'Hira Malik',
      role: 'Digital Educator - Voltix',
      rating: 5,
      avatar: 'H',
    },
    {
      id: 3,
      text: 'This wasn\'t just design work — it was strategic. My academy finally looks like a serious platform, and my audience responds differently now.',
      author: 'Usman Tariq',
      role: 'Academy Owner - Elevate',
      rating: 5,
      avatar: 'U',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          className="section-label-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">TESTIMONIALS</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">What They Say <span className="highlight">About Me</span></h2>
          <p className="section-subtitle">What people say about working with me</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
