import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { config } from '../_config';

export async function GET(context: any) {
    const articles = await getCollection('articles');

    return rss({
        title: `${config.name}'s Blog and Portfolio`,
        description: `${config.summary}`,
        site: context.site,

        items: articles.map((article) => ({
            title: article.data.title,
            pubDate: article.data.date,
            description: article.data.description,
            link: `/articles/${article.slug}/`,
        })),
    });
}
