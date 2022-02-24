import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.imageUrl}`} alt="" width="400px" height="350px" className="card-image" />
            <div className="card-components">
                <div className="card-location">
                    <img src="../images/location.svg" alt="" width="15px" />
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.item.title}</h2>
                <h4 className="card-dates">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}