/*Component displaying details of a specific logement. */
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../../logements.json'; 
import StarRating from './StarRating';
import Carousel from './Carousel'; 
import Collapse from '../Collapse/Collapse';
import './Sheet.scss'

const Sheet = () => {
    const { id } = useParams(); 
    const [logement, setLogement] = useState(undefined);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const foundLogement = data.find((item) => item.id === id);
        if (foundLogement) { setLogement(foundLogement); } 
        else { setLogement(null); }
    }, [id]);

    if (logement === undefined) return <div>Chargement des données...</div>;
    if (logement === null) return <Navigate to="/not-found" />;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
        <div className="__Sheet">
            <Carousel 
                images={logement.pictures} 
                currentIndex={currentIndex} 
                nextSlide={nextSlide} 
                prevSlide={prevSlide} 
            />
            <h1>{logement.title}</h1> 
            <h2>{logement.location}</h2>
            <div className="tags">
                {logement.tags.map((tag) => (
                <div key={tag} className="tag-button">{tag}</div>
                ))}
            </div>   
            <div className="host">
                <StarRating rating={logement.rating} size='15' />
                <p>{logement.host.name}</p> 
                <img src={logement.host.picture} className="hostPicture" alt={logement.host.name}/>
            </div>   
            <div className="sheet_collapse">
            <Collapse title="Description" txt={logement.description} />
            <Collapse title="Équipements" txt={logement.equipments} />   
            </div>   
        </div>
    );
};
export default Sheet;
