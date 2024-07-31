/*Component that renders a collapsible section with a title and text content. */
import React, { useState } from 'react';

function Collapse({ title, txt }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const collapseStyle = {
    textAlign: 'center',
    flexDirection : 'column',
    display: 'flex',
    width: '100%',
  };

  const buttonStyle = {
    display: 'flex',
    backgroundColor: '#FF6060',
    borderRadius: '5px',
    fontFamily: "'Montserrat Ace Medium', Times, serif",
    color: 'white',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '89.3%',
    height: '30px',
    fontSize: '13px',
    textIndent: '0.6rem',
    marginLeft: '5%',
    cursor: 'pointer',
  };

  const symbolStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.5s ease-in',
    display: 'flex',
    fontSize: '30px',
    marginRight: '4%',
    justifyContent: 'flex-end', 
    transformOrigin: '70%',
  };
const containerStyle = {
    overflow: 'hidden',
    maxHeight: isOpen ? '100px' : '0',
    transition: 'max-height 0.5s ease-out',
  };

  const txtStyle = {
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.5s ease-out',
    width: '89.3%',
    overflow: 'hidden',
    marginLeft: '5%',
  };

  return (
    <div className="Collapse" style={collapseStyle}>
      <div style={buttonStyle} className={title} onClick={handleToggle}>
        <span>{title}</span>
        <span style={symbolStyle}>^</span>
      </div> <br /> 
      <div style={containerStyle}>
        <div style={txtStyle} className={title+"_text"}>{txt}</div><br />
      </div>
    </div>
  );
}

export default Collapse;
