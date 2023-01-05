import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';

import { marked } from 'marked';

import { LoadingSpinner } from '../../components/loading_spinner';
import { ShareLinks } from '../share_links';

import { DIR_PATHS } from '../../util/dir_path';
import { formatDate } from '../../util/date_format';
import { MarkdownParser, MarkdownDataType } from '../../util/md_parser';

import './blog.scss';

type blogStateType = {
  headingData: any;
  content: any;
};

export const Blog = () => {
  const [loadError, setLoadError] = useState('');

  const [blog, setBlog]: [
    blogStateType,
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
    fetch(`${DIR_PATHS.blog}/${file_name}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: MarkdownDataType = MarkdownParser(res);

        setBlog({
          headingData: {
            banner: parsed_markdown.banner,
            description: parsed_markdown.description,
            title: parsed_markdown.title,
            timestamp: parsed_markdown.timestamp,
          },
          content: parsed_markdown.content,
        });
      })
      .catch(() => setLoadError('We were unable to fetch the blog'));
  }, []);

  if (!blog.content) {
    return (
      <main className='absolute-center'>
        <LoadingSpinner />
      </main>
    );
  }

  if (loadError) {
    return <h2>{loadError}</h2>;
  }

  const DATE_STRING = formatDate(
    new Date(parseInt(blog.headingData.timestamp))
  );

  const ROUTE_PATH = blog.headingData.title.replaceAll(' ', '-').toLowerCase();

  const SHARE_DESCRIPTION = `Check out this awesome blog post!\n\n${blog.headingData.title} ->`;

  return (
    <main className='blog-page'>
      <div className='blog-container'>
        <div className='blog-head'>
          {blog.headingData.banner && (
            <div className='blog-banner'>
              <img
                src={`/blog/${ROUTE_PATH}/${blog.headingData.banner}.png`}
                alt='Image representing the blog post.'
              />
            </div>
          )}

          <div className='blog-header'>
            <div className='title'>
              <h2>{blog.headingData.title}</h2>
              <h4>
                <IonIcon icon={calendarOutline}></IonIcon>
                {DATE_STRING}
              </h4>
            </div>

            <div className='tags'>
              <ShareLinks
                twitter
                linkedin
                title={blog.headingData.title}
                description={SHARE_DESCRIPTION}
              />
            </div>
          </div>
        </div>

        <hr />

        <div
          className='blog-content'
          dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
        ></div>
      </div>
    </main>
  );
};
