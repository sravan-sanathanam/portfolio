import React from 'react'
import { personal } from '../data/content'

const facts = [
  { key: 'Position', val: 'Ph.D. Student, Alabama A&M' },
  { key: 'Minor', val: 'Bioinformatics' },
  { key: 'Publications', val: '4 peer-reviewed · 5 in preparation' },
  { key: 'Open to', val: 'Research scientist · Postdoc · Industry' },
]

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div>
          <h1 id="hero-heading">Multi-Omics of Nematode Resistance in Cotton</h1>
          <p className="hero-dissertation">
            Dissertation: Systems Level Approach to Explore Reniform Nematode
            Resistance in Cotton
          </p>
          <p className="hero-text">
            I compare susceptible and tolerant cotton genotypes under reniform
            nematode pressure, combining RNA-seq with 16S/ITS rhizosphere
            sequencing to find candidate defense genes and microbial
            bioindicators for sustainable nematode management.
          </p>
          <div className="hero-actions">
            <a href={personal.cvUrl} className="btn btn-primary" download="Sravan_Kumar_Sanathanam_CV.pdf">Download CV</a>
            <a href={personal.scholar} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href={personal.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <dl className="facts">
          {facts.map(f => (
            <div key={f.key}>
              <dt>{f.key}</dt>
              <dd>{f.val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
