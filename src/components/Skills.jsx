import React from 'react'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label">Skills &amp; Toolkit</p>
        <h2 id="skills-heading">Expertise</h2>
        <div className="skill-groups">
          {skillGroups.map(group => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map(item => (
                  <li key={item.title}>
                    <span className="skill-name">{item.title}</span>
                    <span className="skill-tools"> — {item.tools.join(', ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
