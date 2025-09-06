import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Training from './components/Training'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar></Navbar>
  {/* <Header></Header> */}
  <Hero></Hero>
  <About></About>
  <Project></Project>
  <Skills></Skills>
  <Experience></Experience>
  <Achievements></Achievements>
  <Training></Training>
  <Contact></Contact>
  <Footer/>
  </>
  )
}

export default App
