import React from 'react'
import { personal } from '../data/content'
import styles from './Contact.module.css'

const links = [
  { icon: 'ti-mail',           label: 'Email',          href: `mailto:${personal.email}` },
  { icon: 'ti-brand-linkedin', label: 'LinkedIn',        href: personal.linkedin },
  { icon: 'ti-brand-github',   label: 'GitHub',          href: personal.github },
  { icon: 'ti-book',           label: 'Google Scholar',  href: personal.scholar },
  { icon: 'ti-id',             label: 'ORCID',           href: personal.orcid },
]

const openTo = [
  'Postdoctoral research positions',
  'Industry roles in agri-biotech or genomics',
  'Collaborative plant multi-omics projects',
  'Always happy to discuss science & data',
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.left}>
        <p className="eyebrow">Contact</p>
        <h2 className={styles.title}>Let's<br /><span>Connect</span></h2>
        <p className={styles.body}>
          Open to postdoctoral positions, industry research roles in agri-biotech
          or genomics, and collaborative projects in plant multi-omics.
        </p>
        <div className={styles.links}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.btnInner}>
                <i className={`ti ${l.icon}`} aria-hidden="true" />
                {l.label}
              </span>
              <span className={styles.btnArrow}>→</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <div className={styles.openToLabel}>Open to</div>
          <div className={styles.openToItems}>
            {openTo.map(item => (
              <div key={item} className={styles.openToItem}>
                <div className={styles.dot} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cvBlock}>
          <div className={styles.cvIcon}>
            <i className="ti ti-file-text" aria-hidden="true" />
          </div>
          <div className={styles.cvText}>
            <div className={styles.cvLabel}>Curriculum Vitae</div>
            <div className={styles.cvSub}>Download PDF · Updated 2025</div>
          </div>
          <a href={personal.cvUrl} className={styles.cvBtn} download>
            Download
          </a>
        </div>
      </div>
    </section>
  )
}
