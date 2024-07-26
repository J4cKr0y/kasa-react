import './Body.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../logements.json'; 

const Body = () => {
    return (
        <div className='__body'>
            <div className='__body--banner1'></div>
            <div className='__body--contain_thb'>
                {data.map((logement) => (
                    <div key={logement.id} data-imgtitle={logement.title} className='__body--contain_thb--thumb'>
                        <Link to={`/fiche/${logement.id}`}>
                            <img src={logement.cover} alt={logement.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
