import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { LoadingSpinner } from '../../components/loading_spinner';

import { DIR_PATHS } from '../../util/dir_path';
import { formatDate } from '../../util/date_format';
import { MarkdownParser, MarkdownDataType } from '../../util/md_parser';

import './work.scss';

type workStateType = {
  headingData: any;
  content: any;
};

export const Work = () => {
  const [loadError, setLoadError] = useState('');

  const [work, setWork]: [
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
    fetch(`${DIR_PATHS.works}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: MarkdownDataType = MarkdownParser(res);

        setWork({
          headingData: {
            banner: parsed_markdown.banner,
            description: parsed_markdown.description,
            title: parsed_markdown.title,
            timestamp: parsed_markdown.timestamp,
            endTimestamp: parsed_markdown.endTimestamp,
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

  const START_DATE = formatDate(
    new Date(parseInt(work.headingData.timestamp)),
    false
  );

  const END_DATE =
    work.headingData.endTimestamp === 'Present'
      ? 'Present'
      : formatDate(new Date(parseInt(work.headingData.endTimestamp)), false);

  return (
    <main className='work-page'>
      <div className='work-container'>
        {work.headingData.banner && (
          <div className='work-banner'>
            <img src={`/works_banners/${work.headingData.banner}.png`} />
          </div>
        )}

        <div className='work-header'>
          <h2>{work.headingData.title}</h2>
          <div className='tags'>
            {START_DATE} &mdash; {END_DATE}
          </div>
        </div>

        <hr />

        <ReactMarkdown skipHtml={true} className='work-content'>
          {work.content}
        </ReactMarkdown>
      </div>
    </main>
  );
};
