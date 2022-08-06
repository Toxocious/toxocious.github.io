import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { LoadingSpinner } from '../../components/loading_spinner';

import { DIR_PATHS } from '../../util/dir_path';
import { MarkdownParser, MarkdownDataType } from '../../util/md_parser';

import './project.scss';

type projectStateType = {
  headingData: any;
  content: any;
};

export const Project = () => {
  const [loadError, setLoadError] = useState('');

  const [project, setProject]: [
    projectStateType,
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
    fetch(`${DIR_PATHS.projects}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: MarkdownDataType = MarkdownParser(res);

        setProject({
          headingData: {
            banner: parsed_markdown.banner,
            description: parsed_markdown.description,
            tags: parsed_markdown.tags,
            title: parsed_markdown.title,
            repo_path: parsed_markdown.repo_path,
            show_issues: parsed_markdown.show_issues,
            show_forks: parsed_markdown.show_forks,
            show_stars: parsed_markdown.show_stars,
            show_license: parsed_markdown.show_license,
            show_lines_of_code: parsed_markdown.show_lines_of_code,
          },
          content: parsed_markdown.content,
        });
      })
      .catch(() => setLoadError('We were unable to fetch the project'));
  }, []);

  if (!project.content) {
    return (
      <main className='absolute-center'>
        <LoadingSpinner />
      </main>
    );
  }

  if (loadError) {
    return <h2>{loadError}</h2>;
  }

  return (
    <main className='project-page'>
      <div className='project-container'>
        {project.headingData.banner && (
          <div className='project-banner'>
            <img src={`/projects_banners/${project.headingData.banner}.png`} />
          </div>
        )}

        <div className='project-header'>
          <h2>{project.headingData.title}</h2>
          <div className='tags'>
            <a
              className='button'
              href={`https://github.com/${project.headingData.repo_path}`}
            >
              Source Code
            </a>
          </div>
        </div>

        <hr />
        <br />

        {project.headingData.repo_path && (
          <div className='project-badges'>
            {project.headingData.show_issues && (
              <img
                alt='Issue Count'
                src={`https://img.shields.io/github/issues/${project.headingData.repo_path}?style=for-the-badge&logo=appveyor`}
              />
            )}
            {project.headingData.show_forks && (
              <img
                alt='Fork Count'
                src={`https://img.shields.io/github/forks/${project.headingData.repo_path}?style=for-the-badge&logo=appveyor`}
              />
            )}
            {project.headingData.show_stars && (
              <img
                alt='Star Count'
                src={`https://img.shields.io/github/stars/${project.headingData.repo_path}?style=for-the-badge&logo=appveyor`}
              />
            )}
            {project.headingData.show_license && (
              <img
                alt='License'
                src={`https://img.shields.io/github/license/${project.headingData.repo_path}?style=for-the-badge&logo=appveyor`}
              />
            )}
            {project.headingData.show_lines_of_code && (
              <img
                alt='Lines Of Code'
                src={`https://img.shields.io/tokei/lines/github/${project.headingData.repo_path}?style=for-the-badge`}
              />
            )}
          </div>
        )}

        <ReactMarkdown skipHtml={true} className='project-content'>
          {project.content}
        </ReactMarkdown>
      </div>
    </main>
  );
};
