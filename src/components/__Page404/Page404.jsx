import React from 'react';
import './Page404.scss';

const links = [
  { path: "/", name: "Retourner sur la page d'accueil" },
];

function Page404() {
    return (
        <div className='__page404'>
            <h1>404</h1>  
            <br/>
            <h2>Oups! La page que vous demandez n'existe pas.</h2> 
            <br/>
                <a href={links[0].path}>{links[0].name}</a>
            <br/>
        </div>
    );
}

export default Page404;
