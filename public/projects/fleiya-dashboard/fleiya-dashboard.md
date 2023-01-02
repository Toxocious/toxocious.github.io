---
title: Fleiya Dashboard
tags: Node.js, React, TypeScript, Express, Prisma, MongoDB, tRPC, Vite
description: Fleiya Dashboard is a community resource for the PokeOne online game, meant to provide an all-in-one resource for information.
repo_path: toxocious/fleiya-dashboard
banner: fleiya-dashboard
show_issues: true
show_forks: true
show_stars: true
show_license: true
show_lines_of_code: true
started_on: 1656581225000
order: 4
---


**Fleiya Dashboard** is the web-facing user interface for Fleiya &mdash; an injectable Windows .dll that enhances the user's playing experience with quality-of-life updates &mdash; which provides the end-user with a variety of information &mdash; Pok&eacute;dex information, item information, guides for in-game content, and more &mdash; in a single place.

This is meant to be an extension to &mdash; or even replacement of &mdash; [Pok&eacute;One Community](https://pokeonecommunity.com/) once it is finished, as the Pok&eacute;One Community website is often quite slow and lacks a fair bit of useful information.



## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Works In Progress](#works-in-progress)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [General Stance](#general-stance)
- [License](#license)



## About The Project
### Tech Stack
- Node.js
- React
- TypeScript
- Express
- Prisma
- MongoDB
- Axios
- tRPC


### Features
- Tracks the latest news in game, such as event releases or new regions
- Provides a vast number of in-depth guides for various pieces of content
- Provides a Pok&eacute;dex containing each Pok&eacute;mon's base stats, abilities, obtainable location data, and more
- Provides an Itemdex containing each item's information (description, stack limit, whether it's obtainable in game) and where it can be obtained in game
- Provides a variety of useful tools
  - Calculate the Hidden Power type of a Pok&eacute;mon based on a set of IVs
  - Calculate the needed Trainer Exp. to go from one trainer level to the next
- ... and more

### Works In Progress
- Update Pok&eacute;dex information
  - Add encounter location data for all Pok&eacute;mon
  - Add learnable moves for all Pok&eacute;mon
- Update Itemdex information
  - What each item does
  - Obtainable location data for each item
  - Stack limit (ex: Repel x100, Pok&eacute;ball x300, Reroll Token xUnlimited)
- List of all NPCs
  - Where they're found
  - If they're part of a questline
  - Pre-requesites to get them to appear
- Add guides for grinding Trainer Level in all regions
  - Kanto
  - Johto
  - Unova
- Add guides for regional content
  - Kanto
    - Main Content (Start to E4)
    - Cerulean Valley
    - Sevii Island
    - Legendary Pok&eacute;mon
  - Johto
    - Main Content (Start to E4)
    - Resident Evil
    - Jack Spearow
    - Legendary Pok&eacute;mon
    - Battle Frontier
      - Facilities
      - Park
  - Unova
    - Main Contant (Start to E4)
    - Castelia Outbreak
    - Legendary Pok&eacute;mon
    - Dream World
  - Destiny Island
    - Main Content (Start to End)
- Pok&eacute;mon Team Builder
  - Very much akin to Showdown's Team Builder, but with some modifications
  - No level cap for Pok&eacute;mon
    - Useful for calcing stats of boss-battle Pok&eacute;mon that exceed the level 100 cap
  - Remove EV cap for Pok&eacute;mon
    - Useful for calcing stats of enemy Pok&eacute;mon as some are set up with max EVs in all stats


## Getting Started
### Prerequisites
This project requires that Node.js is installed on your system.

Yarn is used as the package manager here, so make sure that it's installed.
```bash
npm i -g yarn
```

### Installation
1. Clone this repository onto your local machine.

```sh
git clone -r https://github.com/Toxocious/fleiya-dashboard
```

2. From your terminal, enter the ``fleiya-dashboard`` directory.
```sh
cd PATH/TO/fleiya-dashboard
```

3. Install all of the required packages for the project.
```sh
yarn install
```

4. Set up en empty MongoDB cluster and set the connection URI in the `./.env` file in the root directory, as well as assign a dedicated port.
```sh
## MongoDB connection URI
## Yours will be unique; copy it here and edit it as neccessary
ATLAS_URI='mongodb+srv://<USERNAME>:<PASSWORD>@pokeone-cluster.8h5mgay.mongodb.net/pokeone?retryWrites=true&w=majority';

## Port to run MongoDB instance on
MONGODB_PORT = 5000;
```

5. Generate Prisma schema
```sh
npx prisma generate
```

6. Start up the client and server (uses the Concurrently npm package).
```sh
yarn dev
```

7. Visit the links displayed in your terminal to see the client-side and server-side



## Contributing
### General Stance
If you would like to contribute to this project, follow the process below, and await a response on your pull request.

1. Fork the Project
2. Create your Feature Branch (``git checkout -b feature/AmazingFeature``)
3. Commit your Changes (``git commit -m 'Add some AmazingFeature'``)
4. Push to the Branch (``git push origin feature/AmazingFeature``)
5. Open a Pull Request



## License
This project is licensed under GNU GPL 3.

For more information about the license, check out the [LICENSE](LICENSE).
