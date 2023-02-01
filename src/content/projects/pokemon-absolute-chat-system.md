---
title: Pokemon Absolute Chat System
description: A websocket-based chat system that Pokemon Absolute uses and relies on for in-game communications.
repo_path: toxocious/absolute-chat
tags: Node.JS, TypeScript, Socket.io, MySQL
banner: pokemon-absolute
show_issues: true
show_forks: true
show_stars: true
show_license: true
show_lines_of_code: false
started_on: 1607937432000
order: 2
type: projects
---

**Pok&eacute;mon Absolute** is an online text-based Pok&eacute;mon RPG, comprised of numerous features adapted from the official Pok&eacute;mon games, as well as entirely new features that enhance the playing experience of Pok&eacute;mon.

This repository contains the source code for the [Pok&eacute;mon Absolute](https://github.com/Toxocious/Absolute) real-time, socket-based chat system.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
- [Features](#features)
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
- Socket.io
- MySQL



## Features
- Direct database connection to allow for communication between users
- User authentication based on unique auth codes set upon account registration
- Includes numerous custom chat commands for user entertainment and utility
- Prevents clients from spamming numerous messages over a short period of time



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
Open a terminal into your **Pokemon Absolute** directory, and then clone this repository into ``./absol``.

```bash
## Change your active directory to your Pokemon Absolute installation
cd PATH_TO_POKEMON_ABSOLUTE_DIR

## Clone this repository into the ./absol directory
git clone https://github.com/Toxocious/Absolute.git ./absol

## Change your active directory to ./absol
cd ./absol

## Install the project's required modules
yarn install
```

### Run The Script
Ensure that your active directory is the ``./absol`` directory.

**Local**
```bash
## Run the dev_test script
## Uses nodemon to run the source code
yarn dev
```

**Remote**
```bash
## Run the prod script to compile and run the prod code
yarn prod
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
