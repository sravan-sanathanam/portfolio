import React from 'react'
import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>{personal.name}</span>
        <span>Genomics · Transcriptomics · Microbiome · Multi-omics</span>
      </div>
    </footer>
  )
}
