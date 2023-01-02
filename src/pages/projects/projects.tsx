import { useEffect, useState } from 'react';
import { ProjectCard } from '../../components/project_card';

const data = import.meta.glob('/public/projects/**/*.md');

export const ProjectsPage = () => {
  const [projects, setProjects]: [any, any] = useState({
    list: [],
  });

  const PROJECT_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchProjects = () => {
      Object.entries(data).forEach(async ([path, mod]) => {
        const mod_data: any = await mod();

        PROJECT_LIST.push({
          path: path,
          data: mod_data.attributes,
        });

        setProjects((projects: any) => ({
          ...projects,
          list: PROJECT_LIST,
        }));
      });
    };

    fetchProjects();
  }, []);

  return (
    <main>
      <h1 className='separator'>
        <span>Projects</span>
      </h1>

      <div>
        All personal projects that I've worked on &mdash; and are in a complete
        or mostly complete state &mdash; are displayed below.
        <br />
        <br />
        Click on any entry to learn more.
      </div>
      <br />

      <div className='project-card-container'>
        {projects.list &&
          projects.list
            .sort((a: any, b: any) => a.data.order - b.data.order)
            .map((proj: any) => (
              <ProjectCard key={proj.data.title} {...proj.data} />
            ))}
      </div>
    </main>
  );
};
