import React from 'react'
import { awards, teaching, service } from '../data/content'
import styles from './Awards.module.css'

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className={styles.header}>
        <p className="eyebrow">Recognition</p>
        <h2 className={styles.title}>Honors, Teaching &amp; Service</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.awardsList}>
          <div className={styles.subHead}>Awards &amp; Scholarships</div>
          {awards.map((a, i) => (
            <div key={i} className={styles.awardItem}>
              <span className={styles.year}>{a.year}</span>
              <div className={styles.awardContent}>
                <div className={styles.awardTitle}>{a.title}</div>
                <div className={styles.awardOrg}>{a.org}</div>
              </div>
              <span className={styles.amount}>{a.amount}</span>
            </div>
          ))}
        </div>

        <div className={styles.aside}>
          <div className={styles.subHead}>Teaching</div>
          {teaching.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardRole}>{t.role}</span>
                <span className={styles.cardTerm}>{t.term}</span>
              </div>
              <div className={styles.cardCourse}>{t.course}</div>
              <div className={styles.cardInst}>{t.institution}</div>
              <p className={styles.cardNote}>{t.note}</p>
              <div className={styles.cardMeta}>
                <span className={styles.pill}>{t.students} students</span>
                <span className={styles.pill}>Instructor: {t.instructor}</span>
              </div>
            </div>
          ))}

          <div className={styles.subHead} style={{ marginTop: '2rem' }}>Professional Service</div>
          {service.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardRole}>{s.role}</span>
                <span className={styles.cardTerm}>{s.year}</span>
              </div>
              <div className={styles.cardCourse}>{s.event}</div>
              <div className={styles.cardInst}>{s.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
