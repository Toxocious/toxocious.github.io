import { Link } from 'react-router-dom';

import { formatDate } from '../../util/date_format';

import './post_card.scss';

type PostCardType = {
  title: string;
  description: string;
  timestamp: string;
  banner: string;
  type: string;
};

export const PostCard = ({
  title,
  description,
  timestamp,
  banner,
  type,
}: PostCardType) => {
  const DATE_STRING = formatDate(new Date(timestamp));
  const ROUTE_PATH = title.replaceAll(' ', '-').toLowerCase();

  return (
    <Link className='post-card button' to={`/${type}/${ROUTE_PATH}`}>
      <div className='post-card-banner'>
        {banner ? (
          <img src={`/${type}_banners/${banner}.png`} />
        ) : (
          <div className='post-card-no-banner'></div>
        )}
      </div>
      <div className='post-card-content'>
        <div className='post-card-header'>
          <div className='post-card-title'>{title}</div>
          <div className='post-card-date'>{DATE_STRING}</div>
        </div>
        <div className='post-card-description'>
          <div>{description ?? 'No Description'}</div>
        </div>
      </div>
    </Link>
  );
};
