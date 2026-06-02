import React, { useState } from 'react'
import { skillTabs } from '../data/content'
import styles from './Skills.module.css'

function SkillCard({ icon, title, desc, tags }) {
  return (
    <div className={styles.card}>
      <i className={`ti ${icon} ${styles.icon}`} aria-hidden="true" />
      <div className={styles.cardTitle}>{title}</div>
      {desc && <p className={styles.cardDesc}>{desc}</p>}
      <div className={styles.tags}>
        {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(skillTabs[0].id)
  const current = skillTabs.find(t => t.id === active)

  return (
    <section id="skills" className={styles.section}>
      <p className="eyebrow">Skills &amp; Toolkit</p>
      <div className={styles.header}>
        <h2 className={styles.title}>Expertise</h2>
      </div>
      <div className={styles.tabs}>
        {skillTabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab} ${active === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {current.cards.map(card => <SkillCard key={card.title} {...card} />)}
      </div>
    </section>
  )
}
