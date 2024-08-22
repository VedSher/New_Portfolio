import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
