import { Link } from 'react-router-dom';

import { NavigationItems } from '../../constants/nav_links';

import './nav.scss';

export const Nav = () => {
  return (
    <nav>
      <div className='nav_container'>
        {NavigationItems.map((link: any) => (
          <NavLink key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
};

/**
 * Render individual nav links.
 */
const NavLink = (link_data: any) => {
  return (
    <Link to={link_data.link ?? ''} className='nav-item'>
      <span className='nav-item-label'>{link_data.label}</span>
    </Link>
  );
};
