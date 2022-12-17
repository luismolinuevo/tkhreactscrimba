import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './Header'
import About from "./About"
import Interest from './Interest'
import Footer from './Footer'

function App() {

  return (
    <div className="container">
      <Header/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  )
}

export default App
