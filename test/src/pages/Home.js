import React from 'react';
import './Home.css';
import Dropdown from './Dropdown';




function Home() {
    return (
        <div className='home'>
            <body> 
        <h1 className='h1'>
            Press Machine X292
            <br></br>
            <br></br>
            <h2 className='subHeading'>
                Sensors Monitoring
            </h2>           
        </h1>
        <br></br>
        <Dropdown></Dropdown>
        </body> 
        </div>
    )
}

export default Home
