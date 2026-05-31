import React from 'react'
import { personal } from '../data/content'
import styles from './Contact.module.css'

const links = [
  { icon: 'ti-mail',           label: 'Email',         href: `mailto:${personal.email}` },
  { icon: 'ti-brand-linkedin', label: 'LinkedIn',      href: personal.linkedin },
  { icon: 'ti-brand-github',   label: 'GitHub',        href: personal.github },
  { icon: 'ti-book',           label: 'Google Scholar',href: personal.scholar },
  { icon: 'ti-file-text',      label: 'Download CV',   href: personal.cvUrl, download: true },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.eyebrow}>Contact</p>
      <h2 className={styles.title}>Let's Connect</h2>
      <p className={styles.body}>
        Open to postdoctoral positions, industry research roles in agri-biotech
        or genomics, and collaborative projects in plant multi-omics. Always
        happy to discuss science, data, or plants.
      </p>

      <div className={styles.links}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            className={styles.btn}
            target={l.download ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={l.download ? true : undefined}
          >
            <i className={`ti ${l.icon}`} aria-hidden="true" />
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
