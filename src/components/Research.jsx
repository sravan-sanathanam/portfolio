import React from 'react'
import { research } from '../data/content'

export default function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-heading">
      <div className="container">
        <p className="section-label">Research</p>
        <h2 id="research-heading">Focus Areas</h2>
        <p className="lead">
          Multi-omics research combining molecular experiments and computational
          analysis to answer fundamental questions in plant stress biology and crop improvement.
        </p>
        <ol className="numbered">
          {research.map(r => (
            <li key={r.num}>
              <span className="num">{r.num}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
