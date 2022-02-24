import React from 'react'

export default function Card(props) {
    return (
        <div>
            <img src={`../images/${props.imageUrl}`} width="400px" height="350px"/>
            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
            <h2>{props.title}</h2>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>{props.description}</p>
            {console.log(props.imageUrl)}
        </div>
    )
}