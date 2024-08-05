/* component that renders a div containing an image element */
import React from 'react';

function DivImg({ className, src, alt, txt }) {
  const classBis = className + "-text";
  return (
    <div className={className}>
      <img src={src} alt={alt} />
      <div className={classBis}>
        {txt.map((line, index) => (
          <>
            {line}
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default DivImg;
