import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data'
import Locations from './Locations'
import Header from './Header'

function App() {
  const info = data.map((item) => {
    return <Locations index={item.index} {...item} />; //the ... is called spread and just gets all the elements
  });

  return (
    <div>
      <Header/>
      {info}
    </div>
  )
}

export default App
