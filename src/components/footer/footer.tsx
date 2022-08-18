import { CONFIGURATION } from '../../config';
import { SocialLinks } from '../../features/social_links';

import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='copyright'>
          &copy; {new Date().getFullYear()} <b>{CONFIGURATION.name}</b>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
};
