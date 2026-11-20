import React from 'react'
import { personal } from '../data/content'

const profile = [
  { key: 'Degree',      val: 'Ph.D. in Plant & Soil Science (in progress)' },
  { key: 'Institution', val: 'Alabama A&M University' },
  { key: 'Focus',       val: 'Plant Molecular Biology, Multi-Omics' },
  { key: 'Minor',       val: 'Bioinformatics' },
  { key: 'Open to',     val: 'Postdoc · Industry research · Collaboration' },
]

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label">About</p>
        <h2 id="about-heading">Science rooted in data and biology</h2>
        <div className="two-col">
          <div className="prose">
            {personal.bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div>
            <p className="subhead">Research profile</p>
            <dl className="profile">
              {profile.map(r => (
                <div key={r.key}>
                  <dt>{r.key}</dt>
                  <dd>{r.val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
