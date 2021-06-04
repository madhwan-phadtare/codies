import React from 'react'
import './CSS/LandingPage.css'
import landing from '../Static/landing.gif'

function LandingPage() {
    return (
        <div className="Landing">
            <img src={landing} alt="hello" className="landimg"></img>
            <h1>LEARN.CREATE.EARN</h1>
        </div>
    )
}

export default LandingPage
