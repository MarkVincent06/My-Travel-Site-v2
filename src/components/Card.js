import React from 'react'
import locationIcon from '../images/location.png'

function Card({title, location, googleMapsUrl, startDate, endDate, description, imgSrc}) {

    return (
        <main className='card'>
            <div className='card--left'>
                <img className='card--left--coverImg' src={`../${imgSrc}`} />
            </div>

            <div className='card--right'>
                <img className='card--right--icon' src={locationIcon}/>
                <small className='card--right--country'>{location}</small>
                <a className='card--right--googleMaps' href={googleMapsUrl} target="_blank">View on Google Maps</a>
                <h2 className='card--right--title'>{title}</h2>
                <p className='card--right--date'>{startDate} - {endDate}</p>
                <p className='card--right-desc'>{description}</p>
            </div>
        </main>
    )
}

export default Card;