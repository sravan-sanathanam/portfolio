import React from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Research     from './components/Research'
import Projects     from './components/Projects'
import Publications from './components/Publications'
import Awards       from './components/Awards'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
