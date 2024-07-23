import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json'; 

const Fiche = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = data.find((item) => item.id === id);
        setLogement(foundLogement);
    }, [id]);

    if (!logement) return <div>Chargement des données...</div>;

    return (
        <div>
            <img src={logement.cover} alt="{logement.title}"/>
            <h1>{logement.title}</h1> {logement.host.name} <img src={logement.host.picture} alt="{logement.host.name}"/>
            {logement.location}
            {logement.tags} {logement.rating}
            {logement.description} {logement.equipments}
        </div>
    );
};

export default Fiche;
