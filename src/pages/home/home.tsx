import { CONFIGURATION } from '../../config';

import { SocialLinks } from '../../features/social_links';

import './home.scss';

export const HomePage = () => {
  return (
    <main className='home'>
      <div className='home-description'>
        <div className='home-profile'>
          <img
            src='/favicons/android-chrome-192x192.png'
            alt='Image depicting the owner'
          />

          <div className='home-profile-details'>
            <div className='home-profile-info'>
              <h1>{CONFIGURATION.name}</h1>
              <h2>{CONFIGURATION.occupation}</h2>
            </div>

            <SocialLinks />
          </div>
        </div>

        <hr />

        <p>
          Hello! I am {CONFIGURATION.name}, a {CONFIGURATION.occupation} based
          in {CONFIGURATION.location}.
        </p>

        <p>
          This is my blog and development portfolio, where I'll blog about
          things that pique my interest, as well as show off work that I've
          created and have made open-source.
        </p>

        <p>
          I'm a software engineer with an avid interest in developing
          applications from scratch and improving already existing applications.
          Programming is my absolute favorite thing to do; whether I'm learning
          about a new technology or how underlying code works behind the scenes,
          or even planning out the achitecture for a new application, nothing
          else brings me quite as much joy as programming does.
        </p>

        <p>
          Are you looking for someone who can develop your next app?
          <br />
          Or someone who can pick up unfamiliar technology with ease and adapt
          quickly?
          <br />
          Perhaps you're looking for a good culture fit AND someone who can
          identify problems and come up with solutions for them.
        </p>

        <p>Look no further.</p>

        <p>
          I've learned numerous technologies and skills and have efficiently
          adapted them to many different applications. I can quickly identify
          problems and come up with potential solutions to them that quickly
          resolve the issue and improve many aspects of the code base and user
          experience.
        </p>
      </div>
    </main>
  );
};
