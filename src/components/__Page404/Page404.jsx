import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.scss';

function Page404() {
    return (
        <div className='__page404'>
            <h1>404</h1>  
            <br/>
            <h2>Oups! La page que vous demandez n'existe pas.</h2> 
            <br/>
            <Link to="/">Retourner sur la page d'accueil</Link>
            <br/>
        </div>
    );
}

export default Page404;
