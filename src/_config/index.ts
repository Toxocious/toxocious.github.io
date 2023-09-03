export const config = {
    name: 'Jesse Mack',
    occupation: 'Software Engineer',
    location: 'Arizona, United States',

    github: 'toxocious',
    gitlab: '',
    linked_in: 'mackjesse',
    twitter: 'toxocious',
    email: 'mackjessed@gmail.com',

    resume: 'Jesse_Mack_Software_Engineer_Resume.pdf',

    get summary() {
        return `Hey there! I'm ${config.name} from ${config.location}, and I love to make beautiful things, solve complex puzzles, and brainstorm new ideas.`;
    },
    get headline() {
        return `${this.occupation} and aspiring entrepreneur`;
    },

    seo: {
        keywords:
            'toxocious, jesse mack, software developer, software engineer, php, sql, mysql, node, nodejs, html, css, git, github',

        get description() {
            return config.summary;
        },

        site_type: 'website',

        site_url: 'https://toxocious.is-a.dev/',

        twitter_card_image: 'images/twitter_card.png',
        twitter_card_description:
            "Jesse Mack's personal portfolio as a software engineer.",
    },
};
