import React from 'react'
import { publications } from '../data/content'
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <p className={styles.eyebrow}>Publications</p>
      <h2 className={styles.title}>Selected Work</h2>

      <div className={styles.list}>
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.doi}
            className={styles.item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.year}>{pub.year}</span>
            <div className={styles.content}>
              <div className={styles.pubTitle}>{pub.title}</div>
              <div className={styles.meta}>
                <span className={styles.journal}>{pub.journal}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.role}>{pub.role}</span>
              </div>
            </div>
            <i className={`ti ti-external-link ${styles.extIcon}`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}
