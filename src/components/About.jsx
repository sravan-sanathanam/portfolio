import React from 'react'
import { personal } from '../data/content'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.eyebrow}>About</p>
      <h2 className={styles.title}>Science rooted in data &amp; biology</h2>
      {personal.bio.map((para, i) => (
        <p key={i} className={styles.body}>{para}</p>
      ))}
    </section>
  )
}
