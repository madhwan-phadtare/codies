import React from 'react'
import learn1 from '../Static/learn1.gif'
import learn2 from '../Static/learn2.gif'
import create1 from '../Static/create1.gif'
import create2 from '../Static/create2.gif'
import earn1 from '../Static/earn1.gif'
import earn2 from '../Static/earn2.gif'

function Home() {
    return (
        <div className="Home">
            <div className="Home_Learn">
                <h1>LEARN</h1>
                <img src={learn1} alt="learn" className="lceimg"></img>
                <img src={learn2} alt="learn" className="lceimg"></img>
                <p></p>
            </div>
            <div className="Home_Create">
                <h1>CREATE</h1>
                <img src={create1} alt="create" className="lceimg"></img>
                <img src={create2} alt="create" className="lceimg"></img>
                <p></p>
            </div>
            <div className="Home_Earn">
                <h1>EARN</h1>
                <img src={earn1} alt="earn" className="lceimg"></img>
                <img src={earn2} alt="earn" className="lceimg"></img>
                <p></p>
            </div>
        </div>
    )
}

export default Home
