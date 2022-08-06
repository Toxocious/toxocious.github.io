export const DIR_PATHS = {
  projects: import.meta.env.MODE == 'development' ? '/projects' : '/projects',
  posts: import.meta.env.MODE == 'development' ? '/posts' : '/posts',
};
