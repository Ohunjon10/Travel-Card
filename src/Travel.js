import React from 'react'


export default function Travel(props) {
  return (
    <div className="travel--card">
        <a href={props.img}><img src={props.img}/></a>
      <div className="info">
        <div className="map--area">
          <i class="fa fa-map-marker"></i>
          <span>{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p><strong>{props.startDate} - {props.endDate}</strong></p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

