import React, { useState, useEffect } from 'react';

function DivImg({ className, src, alt, txt }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const classBis = className + "-text";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={className}>
      <img src={src} alt={alt} />
      <div className={classBis}>
        {windowWidth >= 1024 ? (
          txt.join(' ')
        ) : (
          txt.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}

export default DivImg;
