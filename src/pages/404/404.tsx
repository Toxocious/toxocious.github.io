import './404.scss';

export const Http404Page = () => {
  return (
    <main className='error-404'>
      <div className='message'>
        <h1>404</h1>
        <h3>This page doesn't exist.</h3>
      </div>
    </main>
  );
};
