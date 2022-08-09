import { useEffect, useState } from 'react';
import { PostCard } from '../../components/post_card';

const data = import.meta.glob('/public/works/*.md');

export const WorksPage = () => {
  const [works, setWorks]: [any, any] = useState({
    list: [],
  });

  const POSTS_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchWorks = () => {
      Object.entries(data).forEach(async ([path, mod]) => {
        const mod_data: any = await mod();

        POSTS_LIST.push({
          path: path,
          data: mod_data.attributes,
        });

        setWorks((works: any) => ({
          ...works,
          list: POSTS_LIST,
        }));
      });
    };

    fetchWorks();
  }, []);

  return (
    <main>
      <h1 className='separator'>
        <span>Work History</span>
      </h1>

      <div>
        I do freelance software development; here's an up-to-date log of my
        current work history in the field.
        <br />
        <br />
        Click on any entry to learn more.
      </div>
      <br />

      <div className='post-card-container'>
        {works.list &&
          works.list
            .sort((a: any, b: any) => b.data.timestamp - a.data.timestamp)
            .map((work: any) => (
              <PostCard key={work.data.title} {...work.data} type='works' />
            ))}
      </div>
    </main>
  );
};
