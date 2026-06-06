import React from 'react'
import { personal, heroPills } from '../data/content'
import styles from './Hero.module.css'
import DNAHelix from './DNAHelix'

const statsBar = [
  { val: 'Ph.D. + M.S.', label: 'Degrees in Plant Science' },
  { val: '6', label: 'Research Projects' },
  { val: 'RNA-seq + 16S/ITS', label: 'Sequencing Workflows' },
  { val: 'R + Linux', label: 'Analysis Environment' },
]

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <span className={styles.label}>Plant &amp; Soil Science · Ph.D. Candidate</span>
          <h1 className={styles.heading}>
            Decoding Plant Stress<br />
            Through Genomics &amp;<br />
            <em>Multi-Omics</em>
          </h1>
          <p className={styles.sub}>
            Integrating transcriptomics, rhizosphere microbiome profiling, and
            functional genomics to resolve how plants respond to biotic and
            abiotic stress at the molecular level.
          </p>
          <div className={styles.pills}>
            {heroPills.map(p => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
          <div className={styles.actions}>
            <a href="#research" className={styles.btnPrimary}>View Research</a>
            <a href={personal.cvUrl} className={styles.btnOutline} download>Download CV</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.helixWrap}>
            <DNAHelix />
          </div>
          <div className={styles.profileCard}>
            <div className={styles.avatar}>SKS</div>
            <div>
              <div className={styles.profileName}>{personal.name}</div>
              <div className={styles.profileRole}>Ph.D. Candidate · Plant &amp; Soil Science</div>
              <div className={styles.profileInst}>{personal.institution}</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statsBar}>
        {statsBar.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statVal}>{s.val}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}
