import React from 'react'
import { publications, inPreparation } from '../data/content'

function PubList({ items }) {
  return (
    <ul className="year-list">
      {items.map(pub => (
        <li key={pub.title}>
          <span className="year">{pub.year}</span>
          <div>
            {pub.doi && pub.doi !== '#'
              ? <a href={pub.doi} className="item-title" target="_blank" rel="noopener noreferrer">{pub.title}</a>
              : <span className="item-title">{pub.title}</span>}
            <div className="item-sub">{pub.journal}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Publications() {
  const peer = publications.filter(p => p.peerReviewed)
  const other = publications.filter(p => !p.peerReviewed)

  return (
    <section id="publications" className="section" aria-labelledby="publications-heading">
      <div className="container">
        <p className="section-label">Publications</p>
        <h2 id="publications-heading">Selected Work</h2>

        <h3 className="subhead">Peer-reviewed articles</h3>
        <PubList items={peer} />

        <h3 className="subhead">Thesis &amp; conference abstracts</h3>
        <PubList items={other} />

        <p className="in-prep">
          <span className="item-title">{inPreparation.count} manuscripts in preparation</span>
          <span className="muted"> — {inPreparation.topics}.</span>
        </p>
      </div>
    </section>
  )
}
