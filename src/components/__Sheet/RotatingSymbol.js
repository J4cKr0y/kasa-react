import React, { useState } from 'react';

function RotatingSymbol({ onToggle }) {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
        onToggle();
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