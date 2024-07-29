import React from 'react';

const Carousel = ({ images, currentIndex, nextSlide, prevSlide }) => {
    return (
        <div className="__Sheet--carousel">
            <button onClick={prevSlide} className="__Sheet--carousel-button">&#10094;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="__Sheet--carousel-image" />
            <button onClick={nextSlide} className="__Sheet--carousel-button">&#10095;</button>
            <div className="__Sheet--carousel-counter">{currentIndex + 1}/{images.length}</div>
        </div>
    );
}

export default Carousel;