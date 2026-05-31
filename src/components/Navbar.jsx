import React, { useState, useEffect } from 'react'
import { personal } from '../data/content'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Research', 'Publications', 'Contact']

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>{personal.name}</span>

      <div className={styles.links}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>
            {l}
          </a>
        ))}
      </div>

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
