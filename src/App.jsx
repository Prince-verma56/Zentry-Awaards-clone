import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import About from './components/About'
import Lenis from 'lenis'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'


function App() {



  // Initialize Lenis
  const lenis = new Lenis({
    duration: 3.3,
    lerp: 17,
    smooth: true,

  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <main className="realtive min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact/>
      </main>

    </>
  )
}

export default App