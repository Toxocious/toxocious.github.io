import { Link } from 'react-router-dom';

import './project_card.scss';

type ProjectCardType = {
  title: string;
  description: string;
  banner: string;
  type: 'projects' | 'blog';
};

export const ProjectCard = ({
  title,
  description,
  banner,
}: ProjectCardType) => {
  const ROUTE_PATH = title.replaceAll(' ', '-').toLowerCase();

  return (
    <Link className='project-card button' to={`/projects/${ROUTE_PATH}`}>
      <div className='project-card-banner'>
        {banner ? (
          <img
            src={`/projects/${ROUTE_PATH}/${banner}.png`}
            alt='Image representing the project.'
          />
        ) : (
          <div className='project-card-no-banner'>NO BANNER</div>
        )}
      </div>
      <div className='project-card-title'>{title}</div>
      <div className='project-card-description'>
        <div>{description ?? 'No Description'}</div>
      </div>
    </Link>
  );
};
