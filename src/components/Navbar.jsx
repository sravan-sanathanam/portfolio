import React, { useState } from 'react'
import { personal } from '../data/content'

const links = ['About', 'Skills', 'Research', 'Projects', 'Publications', 'Awards', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="site-name">{personal.name}</a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" aria-label="Main" className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
