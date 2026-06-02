import React from 'react'
import { research } from '../data/content'
import styles from './Research.module.css'

export default function Research() {
  return (
    <section id="research" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="eyebrow">Research</p>
          <h2 className={styles.title}>Focus Areas</h2>
        </div>
        <p className={styles.intro}>
          Multi-omics research combining molecular experiments and computational
          analysis to answer fundamental questions in plant stress biology and crop improvement.
        </p>
      </div>
      <div className={styles.grid}>
        {research.map(r => (
          <div key={r.num} className={styles.card}>
            <span className={styles.num}>{r.num} —</span>
            <div>
              <div className={styles.cardTitle}>{r.title}</div>
              <p className={styles.desc}>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
