import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationItems } from '../../constants/nav_links';

import './nav.scss';

export const Nav = () => {
  return (
    <nav>
      <div className='nav_container'>
        {NavigationItems.map((link: any) => (
          <NavItem key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
};

/**
 * Render individual nav links.
 */
const NavItem = (link_data: any) => {
  const [active, setActive] = useState(false);

  return (
    <NavLink
      to={link_data.link ?? ''}
      className={({ isActive }) =>
        isActive ? 'nav-item active' : 'nav-item inactive'
      }
    >
      <span className='nav-item-label'>{link_data.label}</span>
    </NavLink>
  );
};
