import { CONFIGURATION } from '../../config';

import './header.scss';

export const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <div className='logo'>
          <img src='/favicons/android-chrome-192x192.png' />
          <div className='name'>
            <h2>{CONFIGURATION.name}</h2>
            <h3>{CONFIGURATION.occupation}</h3>
          </div>
        </div>
      </div>
    </header>
  );
};
