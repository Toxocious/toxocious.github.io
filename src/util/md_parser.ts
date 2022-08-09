export type MarkdownDataType = {
  title: string;
  description: string;
  timestamp: string;
  endTimestamp?: string;
  content?: string;
  tags?: string;
  banner?: string;
  site_link?: string;
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
    timestamp: '',
    description: '',
  };

  const MARKDOWN_CHUNKS = Markdown.trim().split('---');
  if (MARKDOWN_CHUNKS.length < 3) {
    return MARKDOWN_DATA;
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
