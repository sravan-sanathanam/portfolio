import React from 'react'
import { projects } from '../data/content'
import styles from './Projects.module.css'

function PillList({ label, items }) {
  return (
    <div className={styles.pillBlock}>
      <div className={styles.pillLabel}>{label}</div>
      <div className={styles.pills}>
        {items.map(item => (
          <span key={item} className={styles.pill}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.eyebrow}>Projects</p>
      <h2 className={styles.title}>Portfolio Case Studies</h2>
      <p className={styles.intro}>
        Selected projects showing the full research path: biological question,
        experimental design, sequencing data, R/Linux analysis, visualization,
        and interpretation.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.topline}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.type}>{project.type}</span>
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.question}>{project.question}</p>
            <PillList label="Methods" items={project.methods} />
            <PillList label="Outputs" items={project.outputs} />
          </article>
        ))}
      </div>
    </section>
  )
}
