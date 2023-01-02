import { Link } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';

import { formatDate } from '../../util/date_format';

import './project_card.scss';

type ProjectCardType = {
  title: string;
  description: string;
  banner: string;
  type: string;
  started_on: number;
  ended_on?: number;
};

export const ProjectCard = ({
  title,
  description,
  banner,
  started_on,
  ended_on,
}: ProjectCardType) => {
  const ROUTE_PATH = title.replaceAll(' ', '-').toLowerCase();

  const STARTED_ON = formatDate(new Date(started_on));
  const ENDED_ON = ended_on ? formatDate(new Date(started_on)) : 'Present';

  return (
    <Link
      className={'project-card button' + (!banner ? ' no-banner' : '')}
      to={`/projects/${ROUTE_PATH}`}
    >
      {banner && (
        <div className='project-card-banner'>
          <img
            src={`/projects/${ROUTE_PATH}/${banner}.png`}
            alt='Image representing the project.'
          />
        </div>
      )}
      <div className='project-card-content'>
        <div className='project-card-header'>
          <div className='project-card-title'>{title}</div>
          <div className='project-card-date'>
            <IonIcon icon={calendarOutline}></IonIcon>
            {STARTED_ON} - {ENDED_ON}
          </div>
        </div>
        <div className='project-card-description'>
          <div>{description ?? 'No Description'}</div>
        </div>
      </div>
    </Link>
  );
};
