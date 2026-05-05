import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Experience.css'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      id: 1,
      role: 'Senior Developer',
      company: 'Tech Company Inc',
      period: '2022 - Present',
      description: 'Led development of multiple projects, mentored junior developers',
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2020 - 2022',
      description: 'Built scalable web applications using React and Node.js',
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Developed responsive web interfaces and backend APIs',
    },
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
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
