import { useState } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-icon">S</span>
          <span className="logo-text">Seerat Munir</span>
        </motion.div>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link"
              >
                {item}
              </button>
            </motion.div>
          ))}
        </nav>

        <div className="header-right">
          <span className="available-badge">● Available</span>
          <motion.button
            className="hire-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Hire Me +
          </motion.button>
        </div>

        <motion.button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
      </div>
    </motion.header>
  )
}
