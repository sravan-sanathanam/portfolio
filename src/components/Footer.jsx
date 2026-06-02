import React from 'react'
import { personal } from '../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>{personal.name}</span>
      <span className={styles.note}>Genomics · Transcriptomics · Microbiome · Multi-omics</span>
    </footer>
  )
}
