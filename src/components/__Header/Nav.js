import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ links, className }) {
  return (
    <nav className={className}>
      <ul>
        {links.map((link, index) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;