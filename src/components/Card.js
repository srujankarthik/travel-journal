import React from 'react'

export default function Card(props) {
    return (
        <div>
            <img src={`../images/${props.item.imageUrl}`} width="400px" height="350px"/>
            <h4>{props.item.location}</h4>
            <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
            <h2>{props.item.title}</h2>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p>{props.item.description}</p>
        </div>
    )
}