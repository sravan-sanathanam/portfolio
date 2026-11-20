import React from 'react'
import { personal } from '../data/content'

const links = [
  { label: 'Email',          href: `mailto:${personal.email}`, text: personal.email },
  { label: 'LinkedIn',       href: personal.linkedin },
  { label: 'GitHub',         href: personal.github },
  { label: 'Google Scholar', href: personal.scholar },
  { label: 'ORCID',          href: personal.orcid },
]

const openTo = [
  'Postdoctoral research positions',
  'Industry roles in agri-biotech or genomics',
  'Collaborative plant multi-omics projects',
  'Always happy to discuss science & data',
]

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 id="contact-heading">Let's connect</h2>
        <div className="two-col">
          <div>
            <p className="prose">
              Open to postdoctoral positions, industry research roles in agri-biotech
              or genomics, and collaborative projects in plant multi-omics.
            </p>
            <ul className="contact-links" style={{ marginTop: 24 }}>
              {links.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {l.text || l.label}
                  </a>
                  {l.text && <span className="muted"> ({l.label})</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subhead">Open to</h3>
            <ul className="plain-list">
              {openTo.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className="contact-cv">
              <h3 className="subhead">Curriculum Vitae</h3>
              <a href={personal.cvUrl} className="btn btn-primary" download="Sravan_Kumar_Sanathanam_CV.pdf">
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
