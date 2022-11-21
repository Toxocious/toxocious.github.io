import { useEffect, useState } from 'react';
import { BlogCard } from '../../components/blog_card';

const data = import.meta.glob('/public/jobs/**/*.md');

export const JobsPage = () => {
  const [jobs, setJobs]: [any, any] = useState({
    list: [],
  });

  const POSTS_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchJobs = () => {
      Object.entries(data).forEach(async ([path, mod]) => {
        const mod_data: any = await mod();

        POSTS_LIST.push({
          path: path,
          data: mod_data.attributes,
        });

        setJobs((jobs: any) => ({
          ...jobs,
          list: POSTS_LIST,
        }));
      });
    };

    fetchJobs();
  }, []);

  return (
    <main>
      <h1 className='separator'>
        <span>Job History</span>
      </h1>

      <div>
        I do freelance software development; here's an up-to-date log of my
        current job history as a software engineer.
        <br />
        <br />
        Click on any entry to learn more.
      </div>
      <br />

      <div className='blog-card-container'>
        {jobs.list &&
          jobs.list
            .sort((a: any, b: any) => b.data.timestamp - a.data.timestamp)
            .map((work: any) => (
              <BlogCard key={work.data.title} {...work.data} type='jobs' />
            ))}
      </div>
    </main>
  );
};
