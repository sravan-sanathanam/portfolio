import React from 'react'
import { personal } from '../data/content'
import styles from './About.module.css'

const profile = [
  { key: 'Degree',      val: 'Ph.D. in Plant & Soil Science (in progress)' },
  { key: 'Institution', val: 'Alabama A&M University' },
  { key: 'Focus',       val: 'Plant Molecular Biology, Multi-Omics' },
  { key: 'Minor',       val: 'Bioinformatics' },
  { key: 'Open to',     val: 'Postdoc · Industry research · Collaboration' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left}>
        <p className="eyebrow">About</p>
        <h2 className={styles.title}>Science rooted in<br /><span>data &amp; biology</span></h2>
        {personal.bio.map((para, i) => (
          <p key={i} className={styles.body}>{para}</p>
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.tableLabel}>Research profile</div>
        {profile.map((r, i) => (
          <div key={r.key} className={styles.row}>
            <span className={styles.rowIdx}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.rowKey}>{r.key}</span>
            <span className={styles.rowVal}>{r.val}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
