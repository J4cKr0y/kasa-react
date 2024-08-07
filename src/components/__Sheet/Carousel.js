/*Component displaying a carousel of images with navigation buttons. */
import React from 'react';

const Carousel = ({ images, currentIndex, nextSlide, prevSlide }) => {
    const visibilityStyle = images.length > 1 ? 'visible' : 'hidden';

    return (
        <div className="__Sheet--carousel">
            <button onClick={prevSlide} className="__Sheet--carousel-button" style={{ visibility: visibilityStyle }}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="__Sheet--carousel-image" />
            <button onClick={nextSlide} className="__Sheet--carousel-button" style={{ visibility: visibilityStyle }}>❯</button>
            <div className="__Sheet--carousel-counter" style={{ visibility: visibilityStyle }}>{currentIndex + 1}/{images.length}</div>
        </div>
    );
}

export default Carousel;
