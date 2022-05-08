import React from 'react'
import Travel from './Travel.js'
import data from './data.js'
import Navbar from './Navbar.js'


const filtered = data.map(item => {
  return <Travel
  img={item.imageUrl}
  googleMapsUrl={item.googleMapsUrl}
  location={item.location}
  startDate={item.startDate}
  endDate={item.endDate}
  description={item.description}
  title={item.title}
  />
})


export default function App() {
  return (
    <div>
    <Navbar/>
    {filtered}
    </div>
  )
}

