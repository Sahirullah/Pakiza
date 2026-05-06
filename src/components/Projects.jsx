import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Projects.css'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Elevate Academy',
      category: 'Educational Platform',
      problem: 'The brand suffered from unclear messaging and lacked authority, resulting in ineffective communication.',
      solution: 'Refined color strategy and positioning control on educational authority. Built a structured identity system and designed layouts that enhance clarity, readability, and content hierarchy.',
      result: 'Improved communication clarity and strengthened trust perception. Established a more authoritative and professional brand presence.',
      tools: ['Photoshop', 'Illustrator'],
      image: '🎓',
      filter: 'Photoshop',
    },
    {
      id: 2,
      title: 'Coaching Branding',
      category: 'Educational Platform',
      problem: 'The brand lacked consistency across platforms. Fragmented visuals, inconsistent messaging, and unclear positioning led to low integration and trust.',
      solution: 'Designed a strategic logo, defined a cohesive color palette and typography, established detailed brand guidelines, and created a unified visual direction for marketing assets.',
      result: 'Achieved consistent brand presence across all touchpoints. Improved consistency, strengthened recognition, and elevated overall brand perception.',
      tools: ['Photoshop', 'Illustrator'],
      image: '🎯',
      filter: 'Illustrator',
    },
    {
      id: 3,
      title: 'Syncora Premium',
      category: 'Premium/Luxury Brand',
      problem: 'The brand appeared visually inconsistent and failed to communicate a premium or luxury perception. Color confusion, and generic styling reduced its perceived value.',
      solution: 'Developed a refined high-end identity system focused on minimalism and precision. Established a controlled premium color palette, introduced a strict typographic hierarchy, and created detailed brand guidelines.',
      result: 'Elevated brand perception from generic to premium. Established a cohesive, luxury-focused visual identity that resonates with high-end market standards.',
      tools: ['Photoshop', 'Illustrator'],
      image: '✨',
      filter: 'Canva',
    },
  ]

  const filters = ['All', 'Photoshop', 'Illustrator', 'Canva', 'Figma']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tools.includes(activeFilter))

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          className="section-label-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">PORTFOLIO</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">A complete showcase of my work across brand identity, visual design, and digital content.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.p
          className="project-count"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Showing {filteredProjects.length} projects
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="project-image-section">
                <div className="project-image">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>

                {/* Problem Section */}
                <div className="project-section">
                  <h4>Problem:</h4>
                  <p>{project.problem}</p>
                </div>

                {/* Solution Section */}
                <div className="project-section">
                  <h4>Solution:</h4>
                  <p>{project.solution}</p>
                </div>

                {/* Result Section */}
                <div className="project-section">
                  <h4>Result:</h4>
                  <p>{project.result}</p>
                </div>

                {/* Tools */}
                <div className="project-tools">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>

                {/* Demo Button */}
                <motion.button
                  className="demo-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ⬈ Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
