import { CONFIGURATION } from '../../config';

import { SocialLinks } from '../../features/social_links';

import './home.scss';

export const HomePage = () => {
  return (
    <main className='home'>
      <div className='home-description'>
        <img src='/favicons/android-chrome-192x192.png' />

        <div className='home-contact'>
          <SocialLinks />
        </div>

        <p>
          Hello! I am {CONFIGURATION.name}, a software engineer based in{' '}
          {CONFIGURATION.location}.
        </p>

        <p>
          This is my blog and development portfolio, where I'll post about
          things that pique my interest, as well as show off work that I've
          created and have made open-source.
        </p>

        <p>
          I've freelanced for clients that are located all over the world,
          delivering my best work &mdash; and attitude &mdash; every single
          time, and am currently looking to transition into full-time work.
        </p>

        <p>
          My set of skills is diverse, ranging from front-end technologies like
          HTML, CSS, and JavaScript (TypeScript also, of course), all the way to
          PHP, Java, some C#, and even C++! I've even managed and administrated
          some Linux servers.
        </p>
      </div>
    </main>
  );
};
