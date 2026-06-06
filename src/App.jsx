import React from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Research     from './components/Research'
import Projects     from './components/Projects'
import Publications from './components/Publications'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
