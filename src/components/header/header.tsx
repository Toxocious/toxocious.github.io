import { useEffect, useState } from 'react';

import { QUOTES, QuoteType } from '../../constants/quotes';

import './header.scss';

export const Header = () => {
  const [quote, setQuote]: [QuoteType, any] = useState({
    quote: '',
    author: '',
  });

  useEffect(() => {
    const RANDOM_QUOTE = QUOTES[Math.floor(Math.random() * QUOTES.length)];

    setQuote(RANDOM_QUOTE);
  }, [quote]);

  return (
    <header>
      <div className='header_container'>
        <h3>
          "{quote.quote}" &mdash; {quote.author}
        </h3>
      </div>
    </header>
  );
};
