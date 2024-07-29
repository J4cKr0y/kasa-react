import React, { useState } from 'react';

function RotatingSymbol() {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div 
            className={`rotate-symbol ${isRotated ? 'rotated' : ''}`} 
            onClick={handleClick}
        >
            ^
        </div>
    );
}

export default RotatingSymbol;