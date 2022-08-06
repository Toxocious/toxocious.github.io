---
title: Moving From Jekyll To React
timestamp: 1659748419000
description: I spent some time over the past week moving my current blog/portfolio (blogfolio, if you will) from a Jekyll template to a completely custom React (w/ Vite) code-base.
---

Over the past week, I've spent some time and have worked on moving my blog's code base over from Jekyll to React, and in that time, I've come to not like Jekyll very much.

Whether or not that's due to the fact that I've only used Jekyll once (when I had initially forked a blog template that primarily used Jekyll) or not, I can't be completely sure about, but I'll go over the experiences that I had while converting over to React.

## My Experiences With Jekyll
Initially, I ran into some issues getting Jekyll set-up on my local machine. After I had spent some time debugging the issue, I figured out that I was missing a needed dependency or something on my Linux installation.

That's fine! Not a big deal since I understand that it was my fault.

After getting Jekyll set-up on my machine, all I had to do was to clone the blog template off of Github ([Chirpy Theme](https://github.com/cotes2020/jekyll-theme-chirpy)), revise a single file with some contact information and the like, add blog posts in the `_posts` directory, and then I could push to Github.

It was simple to set-up, and even easier to add blog posts to.

**But wait..**

I also wanted the blog template to list out any projects that I added into the newly created `_projects` directory. This is something that didn't work out of the box, admittedly, since the template didn't have support for it, which was fine since I was willing to spend time in adding the feature to my fork of the repository by myself.

I took the time to look through the template repository to figure out how posts were being managed, from being added to the `_posts` directory, to then being built, bundled, and served with when you run `bundle exec jekyll serve`.

From there, I created a `_projects` directory, and copied 1-for-1 the logic that I saw being used to display posts from the `_posts` directory.

This is where I had some issues; the code just.. didn't work., and running `bundle exec jekyll serve` would serve me errors that were typically quite vague, and usually useless.

The solution that I ended up doing after painstakingly debugging and looking through the code that was used to render the list of blog posts, was to add the following things to my `_config.yml` file:

```yml
# Updated defaults
defaults:
  - scope:
    # An empty string here means all files in the project
    path: _projects
    type: posts
  values:
    layout: project
    comments: false
    toc: true
    # DO NOT modify the following parameter unless you are confident enough
    # to update the code of all other post links in this project.
    permalink: /project/:title/

# Updated jekyll archives
jekyll-archives:
  enabled: [project, categories, tags]
  layouts:
    projects: page
  permalinks:
    projects: /project/:name/
```

After this, I had to create files to update the list of projects, display the list of all projects from the `_projects` directory, and one to display the information of a project (the page would essentially render the necessary project.md file).

These were mostly just carbon copies of the files that were used to do these things for the blog posts, just with minor changes in logic (replacing "posts" with "projects"), which was quite simple.

Despite the troubles that I had, using Jekyll wasn't terrible once I pieced the parts together.

## Would I Use Jekyll Again?
Certainly, if I took on a client or were employed and had to use it, or it were the best option to accomplish the task at hand. I don't see a viable use case for me to use it currently, though.

It wasn't a terrible experience, and I learned a fair amount in the brief time that I used it, but if I can choose to use something else, such as React, I'd opt for React.

## Was the move to React worth it?
Absolutely. I have used React before, through CRA, Next.js, and now Vite boilerplating, and have always found React to be *fast enough* for what I've done with it.

Setting up the current repository to serve as both a blog and portfolio was pretty easy with only a couple of hiccups along the way due to how Vite handles environment variables and static content, both of which I quickly resolved.

The code-base used now is also just as organized (perhaps a bit more than the old one) and is even cleaner to read and find things in.

Vite is such a pleasure to work with, and I absolutely love how astonishingly quick it is while developing content, as well as how quickly it builds and serves up built projects.
