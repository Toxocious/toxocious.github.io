import { useEffect, useState } from 'react';
import { PostCard } from '../../components/post_card';

const data = import.meta.glob('/public/posts/*.md');

export const PostsPage = () => {
  const [posts, setPosts]: [any, any] = useState({
    list: [],
  });

  const POSTS_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchPosts = () => {
      Object.entries(data).forEach(async ([path, mod]) => {
        const mod_data: any = await mod();

        POSTS_LIST.push({
          path: path,
          data: mod_data.attributes,
        });

        setPosts((posts: any) => ({
          ...posts,
          list: POSTS_LIST,
        }));
      });
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <h1 className='separator'>
        <span>Blog Posts</span>
      </h1>

      <div>
        I like to talk about things that generally pique my interest, and you
        can read about those things here.
        <br />
        <br />
        Click on any entry to learn more.
      </div>
      <br />

      <div className='post-card-container'>
        {posts.list &&
          posts.list
            .sort((a: any, b: any) => b.data.timestamp - a.data.timestamp)
            .map((proj: any) => (
              <PostCard key={proj.data.title} {...proj.data} type='posts' />
            ))}
      </div>
    </main>
  );
};
