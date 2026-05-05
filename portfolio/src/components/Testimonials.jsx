import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Testimonials.css'

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const testimonials = [
    {
      id: 1,
      text: 'Exceptional developer with great attention to detail. Delivered the project on time and exceeded expectations.',
      author: 'John Smith',
      role: 'CEO, Tech Startup',
      rating: 5,
    },
    {
      id: 2,
      text: 'Professional, creative, and highly skilled. A pleasure to work with on multiple projects.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      rating: 5,
    },
    {
      id: 3,
      text: 'Outstanding work quality and communication. Highly recommended for any web development project.',
      author: 'Mike Davis',
      role: 'Founder, Digital Agency',
      rating: 5,
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
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What They Say About Me
        </motion.h2>

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
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
