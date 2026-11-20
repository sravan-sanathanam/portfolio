import React from 'react'
import { awards, teaching, talks, service } from '../data/content'

export default function Awards() {
  return (
    <section id="awards" className="section" aria-labelledby="awards-heading">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 id="awards-heading">Honors, Teaching &amp; Service</h2>
        <div className="two-col">
          <div>
            <h3 className="subhead">Awards &amp; Scholarships</h3>
            <ul className="year-list with-amount">
              {awards.map(a => (
                <li key={a.title}>
                  <span className="year">{a.year}</span>
                  <div>
                    <div className="item-title">{a.title}</div>
                    <div className="item-sub">{a.org}</div>
                  </div>
                  {a.amount ? <span className="amount">{a.amount}</span> : <span />}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="subhead">Teaching</h3>
            {teaching.map(t => (
              <div key={t.course} className="entry">
                <div className="entry-top">
                  <span className="entry-role">{t.role}</span>
                  <span className="entry-term">{t.term}</span>
                </div>
                <div className="item-title">{t.course}</div>
                <div className="item-sub">{t.institution}</div>
                {t.note && <p className="muted">{t.note}</p>}
                {(t.students || t.instructor) && (
                  <p className="muted">
                    {[t.students && `${t.students} students`, t.instructor && `Instructor: ${t.instructor}`]
                      .filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>
            ))}

            <h3 className="subhead">Invited Talks</h3>
            <ul className="year-list">
              {talks.map(t => (
                <li key={t.year + t.event}>
                  <span className="year">{t.year}</span>
                  <div>
                    <div className="item-title">{t.event}</div>
                    <div className="item-sub">{t.title}</div>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="subhead">Professional Service</h3>
            {service.map(s => (
              <div key={s.event} className="entry">
                <div className="entry-top">
                  <span className="entry-role">{s.role}</span>
                  <span className="entry-term">{s.year}</span>
                </div>
                <div className="item-title">{s.event}</div>
                <div className="item-sub">{s.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
