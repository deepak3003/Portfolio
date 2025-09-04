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


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar></Navbar>
  {/* <Header></Header> */}
  <Hero></Hero>
  <About></About>
  <Skills></Skills>
  <Project></Project>
  <Contact></Contact>
  <Footer/>
  </>
  )
}

export default App
