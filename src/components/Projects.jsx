import React from 'react'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 id="projects-heading">Portfolio Case Studies</h2>
        <p className="lead">
          Selected projects showing the full research path: biological question,
          experimental design, sequencing data, R/Linux analysis, visualization, and interpretation.
        </p>
        <div>
          {projects.map(project => (
            <article key={project.title} className="project">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.question}</p>
              <p className="project-meta"><strong>Methods:</strong> {project.methods.join(', ')}</p>
              <p className="project-meta"><strong>Outputs:</strong> {project.outputs.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
