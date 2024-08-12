/*Component that renders a collapsible section with a title and text content. */
import React, { useState } from 'react';
import V from '../../img/V.png'
import './Collapse.scss'

function Collapse({ title, txt }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };



  const symbolStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.5s ease-in',
    transformOrigin: '70%',
  };
const containerStyle = {
    overflow: 'hidden',
    width: '90%',
    maxHeight: isOpen ? '100%' : '0',
    transition: 'max-height 0.5s ease-out',
  };

  const txtStyle = {
    fontWeight: '500',
    fontSize: '13px',
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.5s ease-out',
    width: '89.3%',
    overflow: 'hidden',
    margin: '-1rem 10% 0 10%',
  };

  return (
    <div className="Collapse">
      <button className={title} onClick={handleToggle} >
        <span>{title}</span>
        <span className="symbol" style={symbolStyle}><img src={V} alt="Symbole interactif"/></span>
      </button> <br /> 
      <div style={containerStyle} className="containerTxt">
        <div style={txtStyle} className={title+"_text"}>
          {Array.isArray(txt) ? (
          txt.map((item, index) => (
            <div key={index}>{item}</div>
          ))
          ) : (
          <p>{txt}</p>
          )}
        </div><br />
      </div>
    </div>
  );
}

export default Collapse;
