import './header.scss';

export const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <div className='logo'>
          <img src='/favicons/android-chrome-192x192.png' />
          <div className='name'>
            <h2>Jesse Mack</h2>
            <h3>Software Engineer</h3>
          </div>
        </div>
      </div>
    </header>
  );
};
