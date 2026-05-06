import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">R</span>
          <span className="logo-text">Rashid</span>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <button className="cta-btn">Hire Me</button>
      </div>
    </nav>
  )
}
