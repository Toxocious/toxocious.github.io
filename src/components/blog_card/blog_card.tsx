import { Link } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';

import { formatDate } from '../../util/date_format';

import './blog_card.scss';

type BlogCardType = {
  title: string;
  description: string;
  timestamp: string;
  banner: string;
  type: string;
};

export const BlogCard = ({
  title,
  description,
  timestamp,
  banner,
  type,
}: BlogCardType) => {
  let DATE_STRING = formatDate(new Date(timestamp));
  const ROUTE_PATH = title.replaceAll(' ', '-').toLowerCase();

  return (
    <Link
      className={'blog-card button' + (!banner ? ' no-banner' : '')}
      to={`/${type}/${ROUTE_PATH}`}
    >
      {banner && (
        <div className='blog-card-banner'>
          <img
            src={`/${type}/${ROUTE_PATH}/${banner}.png`}
            alt='Image representing the blog post.'
          />
        </div>
      )}
      <div className='blog-card-content'>
        <div className='blog-card-header'>
          <div className='blog-card-title'>{title}</div>
          <div className='blog-card-date'>
            <IonIcon icon={calendarOutline}></IonIcon>
            <div>{DATE_STRING}</div>
          </div>
        </div>
        <div className='blog-card-description'>
          <div>{description ?? 'No Description'}</div>
        </div>
      </div>
    </Link>
  );
};
