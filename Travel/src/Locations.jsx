import React from 'react'
import "./data.js"
import "./Locations.css"

export default function Locations(props) {
  return (
    <div className='container'>
        <div className='hey'>
            <div className='place'>
                <img src={props.imageUrl}/>
                <div className='test'>
                    <p>{props.location} <a href ={props.googleMapsUrl}>View on Google Maps</a></p>
                    <h1>{props.title}</h1>
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
