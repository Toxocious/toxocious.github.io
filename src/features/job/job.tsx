import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { marked } from 'marked';

import { LoadingSpinner } from '../../components/loading_spinner';

import { DIR_PATHS } from '../../util/dir_path';
import { formatDate } from '../../util/date_format';
import { MarkdownParser, MarkdownDataType } from '../../util/md_parser';

import './job.scss';

type workStateType = {
  headingData: any;
  content: any;
};

export const Job = () => {
  const [loadError, setLoadError] = useState('');

  const [work, setJob]: [
    workStateType,
    React.Dispatch<
      React.SetStateAction<{
        headingData: MarkdownDataType | any;
        content: string | any;
      }>
    >
  ] = useState({
    headingData: null,
    content: null,
  });

  const file_name = useParams().id;

  useEffect(() => {
    fetch(`${DIR_PATHS.jobs}/${file_name}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: MarkdownDataType = MarkdownParser(res);

        setJob({
          headingData: {
            banner: parsed_markdown.banner,
            description: parsed_markdown.description,
            title: parsed_markdown.title,
            timestamp: parsed_markdown.timestamp,
            endTimestamp: parsed_markdown.endTimestamp,
            site_link: parsed_markdown.site_link,
          },
          content: parsed_markdown.content,
        });
      })
      .catch(() => setLoadError('We were unable to fetch the work'));
  }, []);

  if (!work.content) {
    return (
      <main className='absolute-center'>
        <LoadingSpinner />
      </main>
    );
  }

  if (loadError) {
    return <h2>{loadError}</h2>;
  }

  const START_DATE = formatDate(new Date(parseInt(work.headingData.timestamp)));

  const END_DATE =
    work.headingData.endTimestamp === 'Present'
      ? 'Present'
      : formatDate(new Date(parseInt(work.headingData.endTimestamp)));

  return (
    <main className='work-page'>
      <div className='work-container'>
        {work.headingData.banner && (
          <div className='work-banner'>
            <img
              src={`/jobs/${file_name}/${work.headingData.banner}.png`}
              alt='Image representing the job.'
            />
          </div>
        )}

        <div className='work-header'>
          <h2>{work.headingData.title}</h2>
          <div className='tags'>
            {START_DATE} &mdash; {END_DATE}
            {work.headingData?.site_link && (
              <>
                <br />
                <a
                  className='button text-center'
                  href={work.headingData.site_link}
                >
                  <div className='text'>View Site</div>
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='svg-icon'
                      width='44'
                      height='44'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='#6f32be'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' />
                      <line x1='10' y1='14' x2='20' y2='4' />
                      <polyline points='15 4 20 4 20 9' />
                    </svg>
                  </div>
                </a>
              </>
            )}
          </div>
        </div>

        <hr />

        <div
          className='work-content'
          dangerouslySetInnerHTML={{ __html: marked(work.content) }}
        ></div>
      </div>
    </main>
  );
};
