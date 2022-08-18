import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { LoadingSpinner } from '../../components/loading_spinner';

import { DIR_PATHS } from '../../util/dir_path';
import { formatDate } from '../../util/date_format';
import { MarkdownParser, MarkdownDataType } from '../../util/md_parser';

import './post.scss';

type postStateType = {
  headingData: any;
  content: any;
};

export const Post = () => {
  const [loadError, setLoadError] = useState('');

  const [post, setPost]: [
    postStateType,
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
    fetch(`${DIR_PATHS.posts}/${file_name}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: MarkdownDataType = MarkdownParser(res);

        setPost({
          headingData: {
            banner: parsed_markdown.banner,
            description: parsed_markdown.description,
            title: parsed_markdown.title,
            timestamp: parsed_markdown.timestamp,
          },
          content: parsed_markdown.content,
        });
      })
      .catch(() => setLoadError('We were unable to fetch the post'));
  }, []);

  if (!post.content) {
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
    new Date(parseInt(post.headingData.timestamp))
  );

  const ROUTE_PATH = post.headingData.title.replaceAll(' ', '-').toLowerCase();

  return (
    <main className='post-page'>
      <div className='post-container'>
        {post.headingData.banner && (
          <div className='post-banner'>
            <img
              src={`/posts/${ROUTE_PATH}/${post.headingData.banner}.png`}
              alt='Image representing the blog post.'
            />
          </div>
        )}

        <div className='post-header'>
          <h2>{post.headingData.title}</h2>
          <div className='tags'>{DATE_STRING}</div>
        </div>

        <hr />

        <ReactMarkdown skipHtml={true} className='post-content'>
          {post.content}
        </ReactMarkdown>
      </div>
    </main>
  );
};
