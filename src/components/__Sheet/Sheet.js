import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../logements.json'; 
import StarRating from './StarRating';
import './Sheet.scss'

const Sheet = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const foundLogement = data.find((item) => item.id === id);
        setLogement(foundLogement);
    }, [id]);

    if (!logement) return <div>Chargement des données...</div>;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
        <div className="__Sheet">
            <div className="__Sheet--carousel">
                <button onClick={prevSlide} className="__Sheet--carousel-button">&#10094;</button>
                <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="__Sheet--carousel-image" />
                <button onClick={nextSlide} className="__Sheet--carousel-button">&#10095;</button>
                <div className="__Sheet--carousel-counter">{currentIndex + 1}/{logement.pictures.length}</div>
            </div>

            <h1>{logement.title}</h1> 
            <h2>{logement.location}</h2>
            <div className="tags">
                {logement.tags.map((tag) => (
                <div key={tag} className="tag-button">{tag}</div>
                ))}
            </div>
            <StarRating rating={logement.rating} size='15' />
            {logement.host.name} <img src={logement.host.picture} alt="{logement.host.name}"/>
            
  
            {logement.description} {logement.equipments}
        </div>
    );
};

export default Sheet;