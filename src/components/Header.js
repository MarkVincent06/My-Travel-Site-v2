import React from 'react'
import icon from '../images/globe.png'

function Header() {
    return (
        <header className="header">
            <img className='header--icon' src={icon} />
            <h1 className='header--title' >my travel journal.</h1>
        </header>
    )
}

export default Header;