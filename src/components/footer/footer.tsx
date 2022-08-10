import { CONFIGURATION } from '../../config';

import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='copyright'>
          &copy; 2022{' '}
          <a href={CONFIGURATION.git} target='_blank' rel='noopener'>
            {CONFIGURATION.name}
          </a>
        </div>
      </div>
    </footer>
  );
};
