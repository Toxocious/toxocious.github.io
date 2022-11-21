export const DIR_PATHS = {
  projects: import.meta.env.MODE == 'development' ? '/projects' : '/projects',
  blog: import.meta.env.MODE == 'development' ? '/blog' : '/blog',
  jobs: import.meta.env.MODE == 'development' ? '/jobs' : '/jobs',
};
