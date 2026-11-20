import React from 'react'
import { publications } from '../data/content'

export default function Publications() {
  return (
    <section id="publications" className="section" aria-labelledby="publications-heading">
      <div className="container">
        <p className="section-label">Publications</p>
        <h2 id="publications-heading">Selected Work</h2>
        <ul className="year-list">
          {publications.map(pub => (
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
      </div>
    </section>
  )
}
