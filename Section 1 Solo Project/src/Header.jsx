import React from 'react'
import Headshot from "./assets/headshot1.jpg"

export default function Header() {
  return (
    <div className='container'>
        <div className="header">
          <img src={Headshot}/>
          <h1>Luis Molinuevo</h1>
          <p>Full Stack Developer</p>
          <a href='luismolinuevo.com'>luismolinuevo.com</a>
          <div className='buttons'>
            <button>Email</button>
            <button>Linkedin</button>
          </div>
        </div>
        
    </div>
  )
}
