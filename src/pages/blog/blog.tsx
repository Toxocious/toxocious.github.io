import { useEffect, useState } from 'react';
import { BlogCard } from '../../components/blog_card';

const data = import.meta.glob('/public/blog/**/*.md');

export const BlogsPage = () => {
  const [blog, setBlogs]: [any, any] = useState({
    list: [],
  });

  const POSTS_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchBlogs = () => {
      Object.entries(data).forEach(async ([path, mod]) => {
        const mod_data: any = await mod();

        POSTS_LIST.push({
          path: path,
          data: mod_data.attributes,
        });

        setBlogs((blog: any) => ({
          ...blog,
          list: POSTS_LIST,
        }));
      });
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <h1 className='separator'>
        <span>Blog Posts</span>
      </h1>

      <div>
        I like to talk about things that generally pique my interest, and you
        can read about those things here. These topics typically range from
        programming to productivity, but anything goes!
      </div>
      <br />

      <div className='blog-card-container'>
        {blog.list &&
          blog.list
            .sort((a: any, b: any) => b.data.timestamp - a.data.timestamp)
            .map((proj: any) => (
              <BlogCard key={proj.data.title} {...proj.data} type='blog' />
            ))}
      </div>
    </main>
  );
};
