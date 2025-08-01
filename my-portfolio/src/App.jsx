import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Skill from './components/Skill'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header></Header>
  <Hero></Hero>
  <About></About>
  {/* <Skill></Skill> */}
  <Project></Project>
  <Contact></Contact>
  <Footer/>
  </>
  )
}

export default App
