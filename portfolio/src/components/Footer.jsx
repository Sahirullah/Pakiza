import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '📧', label: 'Email', url: '#' },
  ]

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <div className="footer-section footer-left">
            <h3 className="footer-title">Seerat Munir</h3>
            <p className="footer-subtitle">BRAND & GRAPHIC DESIGNER</p>
            <p className="footer-description">Crafting high-authority brand identities that attract clients, build trust, and communicate real value.</p>
            <div className="footer-divider"></div>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h4 className="footer-section-title">QUICK LINKS</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div className="footer-section footer-connect">
            <h4 className="footer-section-title">LET'S CONNECT</h4>
            <p className="connect-text">I have a project in mind! I'd love to hear about it.</p>
            <motion.a
              href="#contact"
              className="btn-get-in-touch"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch →
            </motion.a>
            <div className="social-links">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  className="social-link"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Seerat Munir. All rights reserved.</p>
          <p className="footer-credit">Made with ❤️ for brands that mean business.</p>
        </motion.div>
      </div>
    </footer>
  )
}
