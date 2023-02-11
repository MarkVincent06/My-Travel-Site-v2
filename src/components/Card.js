import React from 'react'
import locationIcon from '../images/location.png'
import coverImage from '../images/manilaCoverImg.jpg'

function Card() {
    return (
        <main className='card'>
            <div className='card--left'>
                <img className='card--left--coverImg' src={coverImage} />
            </div>

            <div className='card--right'>
                <img className='card--right--icon' src={locationIcon} />
                <small className='card--right--country'>JAPAN</small>
                <a className='card--right--googleMaps' href='https://google.com'>View on Google Maps</a>
                <h2 className='card--right--title'>Mount Fuji</h2>
                <p className='card--right--date'>12 Jan, 2021 - 24 Jan 2021</p>
                <p className='card--right-desc'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </main>
    )
}

export default Card;