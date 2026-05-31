import React from 'react'
import { personal, stats, heroPills, workflows } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.tag}>
          <span className={styles.tagDot} />
          {personal.title} · Plant Molecular Biology
        </span>

        <h1 className={styles.name}>
          Plant Genomics,<br />
          Transcriptomics &amp;<br />
          <em>Multi-Omics</em>
        </h1>

        <p className={styles.sub}>
          Integrating wet-lab molecular biology with large-scale RNA-seq,
          microbiome profiling, and functional genomics to decode how plants
          respond to stress — from gene to ecosystem.
        </p>

        <div className={styles.pills}>
          {heroPills.map(p => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>

        <div className={styles.btns}>
          <a href="#research" className={styles.btnPrimary}>View Research</a>
          <a href="#contact"  className={styles.btnOutline}>Get in Touch</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.statGrid}>
          {stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {workflows.map(wf => (
          <div key={wf.label} className={styles.workflowCard}>
            <div className={styles.wfLabel}>{wf.label}</div>
            <div className={styles.wfSteps}>
              {wf.steps.map((step, i) => (
                <React.Fragment key={step}>
                  <span className={styles.wfStep}>{step}</span>
                  {i < wf.steps.length - 1 && (
                    <span className={styles.wfArrow}>›</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
