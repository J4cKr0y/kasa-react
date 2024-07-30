import React, { useState } from 'react';
import RotatingSymbol from './RotatingSymbol';
function Description({ logement }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="tag-button" data-name="description">
        <h3>Description</h3> 
        <RotatingSymbol onToggle={handleToggle} />
      </div>
      <div className={`description ${isOpen ? 'open' : ''}`} data-open={isOpen ? 'true' : 'false'}>
        {logement.description}
      </div>
    </div>
  );
}

export default Description;