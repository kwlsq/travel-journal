import React from 'react'
import EarthIc from '../assets/earth-ic.svg'

export default function Navbar() {
    return(
        <nav>
            <img src={EarthIc}></img>
            <h1>my travel journal.</h1>
        </nav>
    )
}