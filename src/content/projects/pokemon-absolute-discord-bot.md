---
title: Pokemon Absolute Discord Bot
description: The official Pokemon Absolute Discord bot, used by its community for various QoL features and support outside of the RPG.
repo_path: toxocious/absolute-discord-bot
tags: Node.JS, TypeScript, MySQL
banner: pokemon-absolute
show_issues: true
show_forks: true
show_stars: true
show_license: true
show_lines_of_code: false
started_on: 1651133361000
order: 3
type: projects
---

**Pok&eacute;mon Absolute** is an online text-based Pok&eacute;mon RPG, comprised of numerous features adapted from the official Pok&eacute;mon games, as well as entirely new features that enhance the playing experience of Pok&eacute;mon.

This repository contains the source code for the [Pok&eacute;mon Absolute](https://github.com/Toxocious/Absolute) Discord bot.


## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Available Commands](#available-commands)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run The Script](#run-the-script)
- [Contributing](#contributing)
  - [General Stance](#general-stance)
  - [Code Standards](#code-standards)
- [License](#license)



## About The Project
### Tech Stack
- Node.JS
- TypeScript
- MySQL

### Features
- Direct database connection to allow custom Discord commands to perform database queries
- Connect your Pok&eacute;mon Absolute account to the Discord Bot

### Available Commands
- **/commands**
  - Provides a list of available Discord commands
- **/lastseen <user>**
  - Provides when the specified user was last online on the RPG
- **/rarity <species> <forme OPTIONAL>**
  - Provides data on how many of a given species of Pok&eacute;mon are in game
- **/test**
  - Generic test command that doesn't do anything



## Getting Started
### Prerequisites
This project is configured and engineered specifically for [Pok&eacute;mon Absolute](https://github.com/Toxocious/Absolute), and as such, will not work out-of-the-box for anything else.

This project requires that Node.js is installed on your system.

Yarn is used as the package manager here, so make sure that it's installed.
```bash
npm i -g yarn
```

**NOTE: It will be assumed that you already have the main repository ([Pok&eacute;mon Absolute](https://github.com/Toxocious/Absolute)) cloned on your system/server, and will be setting up the chat-system for it.**

### Installation
Open a terminal into your **Pokemon Absolute** directory, and then clone this repository into ``./discord_bot``.

```bash
## Change your active directory to your Pokemon Absolute installation
cd PATH_TO_POKEMON_ABSOLUTE_DIR

## Clone this repository into the ./discord_bot directory
git clone https://github.com/Toxocious/Absolute-Discord-Bot ./discord_bot

## Change your active directory to ./discord_bot
cd ./discord_bot

## Install the project's required modules
yarn install
```

### Run The Script
Ensure that your active directory is the ``./discord_bot`` directory.

**Local**
```bash
## Run the dev_test script
## Uses nodemon to run the source code
yarn dev
```

**Remote**
```bash
## Run the build script
yarn build

## Run the start script
yarn start
```


## Contributing
### General Stance
Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (``git checkout -b feature/AmazingFeature``)
3. Commit your Changes (``git commit -m 'Add some AmazingFeature'``)
4. Push to the Branch (``git push origin feature/AmazingFeature``)
5. Open a Pull Request

### Code Standards
We aren't too picky on what your code looks like as long as it's easy to read and filter through; keep it clean.



## License
This project is licensed under GNU GPL 3.

For more information about the license, check out the [LICENSE](LICENSE).
