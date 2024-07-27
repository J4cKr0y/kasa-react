import React from 'react';
import star_orange from '../../img/star_orange.svg';
import star_grey from '../../img/star_grey.svg';

function StarRating({ rating , size}) {
  return (
    <div className='StarRating'>
      {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <img 
            key={star}
            src={rating >= star ? star_orange : star_grey}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginRight: `${size/2}px`,
            }}
            alt="star"
          />
        )
      })}
    </div>
  )
}

export default StarRating;
