import '../__Body/Body.scss'
import React, { useState, useEffect } from 'react';
import DivImg from '../Utils/DivImg';
import Collapse from '../Collapse/Collapse';
import backgroundImage from '../../img/apropos.jpg';
import aboutData from '../../about.json'; 
function AboutContent() {
    const [data, setData] = useState([]);
    const slogan = [];
    useEffect(() => {
        setData(aboutData);
    }, []);

    return (
        <div className='__body'>
            <DivImg className='__body--banner1' src={backgroundImage} alt="Rivière entre montagnes" txt={slogan} />
            <br />
            {data.map(item => (
                <Collapse key={item.id} title={item.title} txt={item.content} />
            ))}
        </div>
    );
}

export default AboutContent