export const config = {
    name: 'Jesse Mack',
    occupation: 'Software Engineer',
    location: 'Arizona',

    github: 'toxocious',
    gitlab: '',
    linked_in: 'mackjesse',
    twitter: 'toxocious',
    email: 'mackjessed@gmail.com',

    resume: 'Jesse_Mack_Software_Engineer_Resume.pdf',

    get summary() {
        return `I'm a ${this.occupation} and aspiring entrepreneur living in ${config.location}, and I love making things and having lots of side projects going on.`;
    },
    get headline() {
        return `Hey, my name is ${config.name}.`;
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
        get twitter_card_description() {
            return config.summary;
        },
    },
};
