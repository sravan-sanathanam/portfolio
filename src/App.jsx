import React from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Research     from './components/Research'
import Publications from './components/Publications'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
