import React from 'react';

function Logo({class_name, img_src , alt, title}) {
  return (
<div className={class_name}>
            <h1><img src={img_src} alt={alt} />{title}</h1>
        </div>
          )
}

export default Logo;