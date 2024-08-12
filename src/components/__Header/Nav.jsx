/*Component rendering a navigation bar with links. */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav({ links, className }) {
  const location = useLocation();
  return (
    <nav className={className}>
      <ul>
        {links.map((link) => (
          <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;