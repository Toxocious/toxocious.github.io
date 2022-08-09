export type MarkdownDataType = {
  title: string;
  description: string;
  timestamp: string;
  endTimestamp?: string;
  content?: string;
  tags?: string;
  banner?: string;
  repo_path?: string;
  show_issues?: string;
  show_forks?: string;
  show_stars?: string;
  show_license?: string;
  show_lines_of_code?: string;
  order?: string;
};

export const MarkdownParser = (Markdown: string): MarkdownDataType => {
  let MARKDOWN_DATA: MarkdownDataType = {
    title: '',
    tags: '',
    description: '',
    banner: '',
    content: '',
    timestamp: '',
    endTimestamp: '',
    repo_path: '',
    show_issues: '',
    show_forks: '',
    show_stars: '',
    show_license: '',
    show_lines_of_code: '',
    order: '',
  };

  const MARKDOWN_CHUNKS = Markdown.trim().split('---');
  if (MARKDOWN_CHUNKS.length < 3) {
    return {
      title: '',
      tags: '',
      description: '',
      banner: '',
      content: Markdown,
      timestamp: '',
      endTimestamp: '',
      repo_path: '',
      show_issues: '',
      show_forks: '',
      show_stars: '',
      show_license: '',
      show_lines_of_code: '',
      order: '',
    };
  }

  MARKDOWN_DATA.content = MARKDOWN_CHUNKS[2];

  const MARKDOWN_HEAD = MARKDOWN_CHUNKS[1].trim().split('\n');
  for (const HEAD_DATA of MARKDOWN_HEAD) {
    const SPLIT_DATA = HEAD_DATA.split(': ');

    // @ts-ignore
    MARKDOWN_DATA[SPLIT_DATA[0]] = SPLIT_DATA[1];
  }

  return MARKDOWN_DATA;
};
