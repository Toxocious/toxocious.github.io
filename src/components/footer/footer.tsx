import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='copyright'>
          &copy; 2022{' '}
          <a href='https://github.com/toxocious' target='_blank' rel='noopener'>
            Jesse Mack
          </a>
        </div>
      </div>
    </footer>
  );
};
