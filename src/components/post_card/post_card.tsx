import { Link } from 'react-router-dom';

import { formatDate } from '../../util/date_format';

import './post_card.scss';

type PostCardType = {
  title: string;
  description: string;
  timestamp: string;
  banner: string;
  type: string;
  endTimestamp?: string;
};

export const PostCard = ({
  title,
  description,
  timestamp,
  banner,
  type,
  endTimestamp,
}: PostCardType) => {
  let DATE_STRING = formatDate(new Date(timestamp));
  if (endTimestamp) {
    DATE_STRING = DATE_STRING.concat(
      endTimestamp === 'Present'
        ? ' — Present'
        : ` — ${formatDate(new Date(parseInt(endTimestamp)))}`
    );
  }
  const ROUTE_PATH = title.replaceAll(' ', '-').toLowerCase();

  let DATE_PREFIX = type === 'posts' ? 'Posted On' : 'Duration';

  return (
    <Link
      className={'post-card button' + (!banner ? ' no-banner' : '')}
      to={`/${type}/${ROUTE_PATH}`}
    >
      {banner && (
        <div className='post-card-banner'>
          <img
            src={`/${type}/${ROUTE_PATH}/${banner}.png`}
            alt='Image representing the blog post.'
          />
        </div>
      )}
      <div className='post-card-content'>
        <div className='post-card-header'>
          <div className='post-card-title'>{title}</div>
          <div className='post-card-date'>
            <b>{DATE_PREFIX}</b>: {DATE_STRING}
          </div>
        </div>
        <div className='post-card-description'>
          <div>{description ?? 'No Description'}</div>
        </div>
      </div>
    </Link>
  );
};
