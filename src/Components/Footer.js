import React from 'react'
import './CSS/Footer.css'
import {AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillRedditCircle} from 'react-icons/ai'

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_1">
                <p>Handcrafted by Codies</p>
            </div>
            <div className="Footer_2">
                <p>Copyright © 2021 labs.codies</p>
            </div>
            <div className="Footer_3">
                <AiOutlineGithub/>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <AiFillRedditCircle/>
            </div>
        </div>
    )
}

export default Footer
