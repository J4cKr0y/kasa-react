/*Component displaying a carousel of images with navigation buttons. */
import React, { useEffect, useState } from 'react';

const Carousel = ({ images, currentIndex, nextSlide, prevSlide }) => {
    const visibilityStyle = images.length > 1 ? 'visible' : 'hidden';
    const [visibilityStyleC, setVisibilityStyleC] = useState('visible');

    const updateVisibilityStyleC = () => {
        if (window.innerWidth < 1024) {
            setVisibilityStyleC('hidden');
        } else {
            setVisibilityStyleC(images.length > 1 ? 'visible' : 'hidden');
        }
    };

    useEffect(() => {
        updateVisibilityStyleC();});

    return (
        <div className="__Sheet--carousel">
            <button onClick={prevSlide} className="__Sheet--carousel-button" style={{ visibility: visibilityStyle }}>❮</button>
            <img src={images[currentIndex]} alt= {`Slide ${currentIndex + 1}`} className="__Sheet--carousel-image" />
            <button onClick={nextSlide} className="__Sheet--carousel-button" style={{ visibility: visibilityStyle }}>❯</button>
            <div className="__Sheet--carousel-counter" style={{ visibility: visibilityStyleC }}>{currentIndex + 1}/{images.length}</div>
        </div>
    );
}

export default Carousel;
