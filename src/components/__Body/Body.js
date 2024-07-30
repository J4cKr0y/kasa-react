/* Component for body displaying a banner and a list of thumbnails for each logement from the data.*/
import './Body.scss'
import React from 'react';
import backgroundImage from '../../img/home.jpg';
import DivImg from '../Utils/DivImg';
import data from '../../logements.json'; 
import Logement from './Logement';

const slogan= "Chez vous, partout et ailleurs";
const Body = () => {
    return (
        <div className='__body'>

            <DivImg className='__body--banner1' src={backgroundImage} alt="Flan rocheux de bord de mer" txt={slogan} />

            <div className='__body--contain_thb'>
                {data.map((logement) => (
                    <Logement key={logement} logement={logement} />
                ))}
            </div>

        </div>
    );
};

export default Body;
