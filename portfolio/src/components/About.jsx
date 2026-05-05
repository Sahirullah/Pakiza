import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const services = [
    {
      number: 1,
      title: 'Brand Strategy',
      description: 'The decision layer. It defines who you target, what you stand for, and how you win. Built on positioning, audience intelligence, and messaging—so every action is aligned with a clear market advantage.'
    },
    {
      number: 2,
      title: 'Brand Identity',
      description: 'The translation layer. It converts strategy into tangible assets—logo, colors, typography, and visual rules—so the brand is instantly recognizable and perceived as intended.'
    },
    {
      number: 3,
      title: 'Social Media Branding',
      description: 'The execution layer. It operationalizes the brand in daily content—profiles, posts, and visuals—engineered for consistency, attention capture, and conversion on platforms.'
    },
    {
      number: 4,
      title: 'Brand Guidelines',
      description: 'A rulebook that standardizes all visual and verbal elements to maintain consistency across every asset and platform.'
    },
    {
      number: 5,
      title: 'Profile Optimization',
      description: 'Refines bio visuals, highlights, and call-to-actions to convert profile visitors into leads or followers.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        {/* CTA Buttons */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <button className="btn-cta btn-primary-cta">Let's Work Together +</button>
          <button className="btn-cta btn-whatsapp">💬 WhatsApp Me</button>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Who Am I */}
          <motion.div variants={itemVariants} className="about-card who-am-i">
            <div className="card-header">
              <span className="card-icon">👤</span>
              <h3>Who Am I</h3>
            </div>

            <blockquote className="quote">
              "Most coaches and educators don't fail because they lack skill — they fail because their brand doesn't communicate their value."
            </blockquote>

            <p className="bio">
              I'm <strong>Seerat Munir</strong>, a brand designer specializing in building high-authority identities for coaches, educators, and digital academies.
            </p>

            <p className="bio">
              I combine design with psychology to understand how people perceive value. Trust brands, and make decisions.
            </p>

            <div className="credentials">
              <div className="credential">
                <span className="dot">●</span>
                <span>Psychology Student (Position Holder)</span>
              </div>
              <div className="credential">
                <span className="dot">●</span>
                <span>Internationally Certified Graphic Designer</span>
              </div>
              <div className="credential">
                <span className="dot">●</span>
                <span>Specialized in Brand Positioning + Identity Systems</span>
              </div>
            </div>

            <div className="outcome">
              <p className="outcome-label">OUTCOME</p>
              <p className="outcome-text">You don't chase clients anymore — <span className="highlight">your brand starts attracting them.</span></p>
            </div>
          </motion.div>

          {/* Right Column - What You Get */}
          <motion.div variants={itemVariants} className="about-card what-you-get">
            <div className="card-header">
              <span className="card-icon">🎯</span>
              <h3>What You Get</h3>
            </div>

            <div className="services-list">
              {services.map((service) => (
                <div key={service.number} className="service-item">
                  <div className="service-number">{service.number}</div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
