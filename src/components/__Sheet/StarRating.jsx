/*Component displaying a star rating based on the given rating value. */
import React, { useEffect, useState } from 'react';
import star_orange from '../../img/star_orange.svg';
import star_grey from '../../img/star_grey.svg';

function StarRating({ rating, size }) {
  const [sizeAdapt, setSizeAdapt] = useState(size);

  const updateSizeAdapt = () => {
    if (window.innerWidth < 1024) {
      setSizeAdapt(size);
    } else {
      setSizeAdapt(size * 1.5);
    }
  };

  useEffect(() => {
    updateSizeAdapt();
    window.addEventListener('resize', updateSizeAdapt);
    return () => window.removeEventListener('resize', updateSizeAdapt);
  }, [size]);

  return (
    <div className='StarRating'>
      {[1, 2, 3, 4, 5].map((star, index) => (
        <img
          key={index}
          src={rating >= star ? star_orange : star_grey}
          style={{
            width: `${sizeAdapt}px`,
            height: `${sizeAdapt}px`,
            marginRight: `${sizeAdapt / 2}px`,
          }}
          alt="star"
        />
      ))}
    </div>
  );
}

export default StarRating;
