<div align="center">
  <img src='./public/previews/combined_preview.png' width='720' />
  <br /><br />

  <h1 align="center">My Personal Website</h1>

  A personal website is a pretty important thing to have as a software engineer, so I wanted to put something together that would match what I envision and want in a personal website &mdash; an outlet for me to describe myself and the things that I've worked on, while occasionally dumping my brain in a blog article or two.

  It comes with beautiful gradients, outstanding typography, mobile responsiveness, and a small personal touch with a nice Pokemon decal; what more could I possibly want?

  If you're interested in using this repository as a template, please consider forking it and leaving a star.

  <a href="https://github.com/Toxocious/toxocious.github.io/issues">
      <img src='https://img.shields.io/github/issues/toxocious/toxocious.github.io?style=for-the-badge&logo=github' alt="GitHub issues" />
    </a>
    <a href="https://github.com/Toxocious/toxocious.github.io/forks">
      <img src='https://img.shields.io/github/forks/toxocious/toxocious.github.io?style=for-the-badge&logo=github' alt="GitHub forks" />
    </a>
    <a href="https://github.com/Toxocious/toxocious.github.io/stargazers">
      <img src='https://img.shields.io/github/stars/toxocious/toxocious.github.io?style=for-the-badge&logo=github' alt="GitHub stars" />
    </a>
    <br />
    <a href="https://github.com/Toxocious/toxocious.github.io/graphs/contributors">
      <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Toxocious/toxocious.github.io?style=for-the-badge" />
    </a>
    <a href="https://github.com/Toxocious/toxocious.github.io/blob/main/LICENSE">
      <img src='https://img.shields.io/github/license/toxocious/toxocious.github.io?style=for-the-badge' alt="License" />
    </a>
    <br />
    <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Ftoxocious%2Ftoxocious.github.io">
      <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Ftoxocious%2Ftoxocious.github.io&label=VIEWS&countColor=%23263759" alt="Visitor count" />
    </a>
  <br /><br />

  Check us out on Discord if you have any questions or immediate feedback!

  <a href="https://discord.gg/NRZ2zWfpwK" target="_blank">
    <img src="https://discord.com/api/guilds/1002005327555862620/widget.png?style=banner2" alt="Discord Banner" />
  </a>
</div>
<br />



# Table of Contents
- [Table of Contents](#table-of-contents)
- [Screenshots](#screenshots)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Updating To Fit Your Information](#updating-to-fit-your-information)
- [License](#license)



# Screenshots
<div align="center">
  <details>
    <summary>Desktop Previews</summary>
    <img src="./public/previews/desktop/light_home.png" width='720' />
    <img src="./public/previews/desktop/dark_home.png" width='720' />
    <img src="./public/previews/desktop/light_about.png" width='720' />
    <img src="./public/previews/desktop/dark_about.png" width='720' />
    <img src="./public/previews/desktop/light_articles.png" width='720' />
    <img src="./public/previews/desktop/dark_articles.png" width='720' />
    <img src="./public/previews/desktop/light_experience.png" width='720' />
    <img src="./public/previews/desktop/dark_experience.png" width='720' />
    <img src="./public/previews/desktop/light_projects.png" width='720' />
    <img src="./public/previews/desktop/dark_projects.png" width='720' />
  </details>

  <br />

  <details>
    <summary>Mobile Previews</summary>
    <img src="./public/previews/mobile/light_home.png" width='300' />
    <img src="./public/previews/mobile/dark_home.png" width='300' />
    <img src="./public/previews/mobile/light_about.png" width='300' />
    <img src="./public/previews/mobile/dark_about.png" width='300' />
    <img src="./public/previews/mobile/light_articles.png" width='300' />
    <img src="./public/previews/mobile/dark_articles.png" width='300' />
    <img src="./public/previews/mobile/light_experience.png" width='300' />
    <img src="./public/previews/mobile/dark_experience.png" width='300' />
    <img src="./public/previews/mobile/light_projects.png" width='300' />
    <img src="./public/previews/mobile/dark_projects.png" width='300' />
  </details>
</div>



# About The Project
## Tech Stack
- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Features
- **Responsive Design**: Mobile-first layout ensures a great experience on all devices.
- **Theme Toggle**: Switch between light and dark modes.
- **Content-Driven**: Pages are generated from Markdown files for easy updates.
- **RSS Feed**: Automatically generated RSS feed for blog articles.
- **View Transitions**: Smooth page transitions for a seamless user experience.
- **Customizable**: Easily configure personal information and content.

## Updating To Fit Your Information
I tried to keep page information as modular as I possibly could. Updating your name, occupation, etc. is as easy as opening the [dedicated config](./src/_config/index.ts) file and adjusting the information accordingly. This will handle almost everything for you, which is fantastic.

What it *doesn't* handle though, is the content on the *About* page, which is currently manually written. It's easy enough to update that stuff to your liking; just open the page in your editor of choice and go from there.

Updating your work history, open source contributions, and project list is extremely easy as well. Add a Markdown file into any one of the three `src/content` folders, add the frontmatter and content of the file, and it'll automatically be found and displayed on your website. Adding a blog article is just as easy, which is wonderful.

If you get confused on what your Markdown files should have, you can check out and use my existing files as a reference.



# License
Licensed under GNU GPL 3.

For more information, check out [LICENSE](LICENSE).
