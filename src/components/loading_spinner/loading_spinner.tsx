import './loading_spinner.scss';

export const LoadingSpinner = () => {
  return (
    <div className='loading-spinner'>
      <svg viewBox='25 25 50 50'>
        <circle cx='50' cy='50' r='20'></circle>
      </svg>
    </div>
  );
};
