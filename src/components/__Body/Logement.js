/* component that represents a single 'Logement' item with a link to its details page. */

import React from 'react';
import { Link } from 'react-router-dom';

const Logement = ({ logement }) => (
  <div key={logement.id} data-imgtitle={logement.title} className='__body--contain_thb--thumb'>
    <Link to={`/fiche/${logement.id}`}>
      <img src={logement.cover} alt={logement.title} />
    </Link>
  </div>
);

export default Logement;