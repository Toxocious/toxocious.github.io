---
title: Pokemon Absolute
tags: PHP, MySQL, JavaScript, CI/CD
description: An online text-based Pokemon RPG with in-depth battling, trading, map exploration, real-time chatting, and more.
repo_path: toxocious/absolute
banner: pokemon-absolute
show_issues: true
show_forks: true
show_stars: true
show_license: true
show_lines_of_code: true
started_on: 1607937432000
order: 1
---



**Pokemon Absolute** is an online text-based Pokemon RPG, comprised of numerous features adapted from the official Pokemon games, as well as entirely new features that enhance the playing experience of Pokemon.

**Pokemon Absolute**'s entire code base is split into 3 code-heavy repositories, with an additional fourth repository containing only database schemas and necessary data.

This is in order to keep the primary code base, the chat server, and the discord bot, organized and not completely coupled with the game's source code, as the game's main features are fully operational without the chat server and discord bot's source code.



## Disclaimer
Pok&eacute;mon Absolute is undergoing a massive update, wherein the code-base is being ported to React.

The repository containing the updated source-code can be found [HERE](https://github.com/Toxocious/Absolute-React-Dev).

**NOTE :: There is no current estimate on how long this will take.**



## Table of Contents
- [Disclaimer](#disclaimer)
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Screenshot](#screenshot)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Setup](#project-setup)
  - [Chat Setup](#chat-setup)
  - [Discord Bot Setup](#discord-bot-setup)
  - [CI/CD Pipeline Setup](#cicd-pipeline-setup)
- [Contributing](#contributing)
  - [General Stance](#general-stance)
  - [Code Standards](#code-standards)
- [License](#license)



## About The Project
### Screenshot

### Tech Stack
- PHP
- Node.js
- JavaScript
- Socket.io
- MySQL
- MariaDB
- CI/CD
- xDebug

### Features
- Dedicated Battles
  - Use over 800 unique Pok&eacute;mon in battle
  - Utilizes field-effects and terrains
  - Includes over 800+ unique moves
  - Includes over 200+ unique Pok&eacute;mon abilities
  - Includes over 150+ unique items
- Open World Mapping
  - Explore large and open hand-crafted maps
  - Includes many unique wild Pok&eacute;mon
- Come Together With Clans
  - Create your own clan, or join someone else's
  - Earn experience and resources for your clan
  - Level up Clan Upgrades for more progress
- Real Time In-Game Chat
  - Instantly message other players
  - Includes logic and functionality for handling chat bans
- Live Trading
  - Instantly trade your currencies, items, and Pok&eacute;mon with other players
- Staff Panel
  - Check the logs of user activity on macro-discouraged features
  - Ban and unban any user
  - Put pages into and out of 'maintenance mode'
  - Manage obtainable items and Pok&eacute;mon for any location
  - Spawn in items and Pok&eacute;mon to any player
  - Quick update database information of any item or Pok&eacute;mon



## Getting Started
### Prerequisites
This project makes uses of Node.js for the live in-game chat system, and PHP for everything else.

Make sure that you have Node.js installed, as well as PHP 7.2+, Apache or Nginx, and PHPMyAdmin.

*Note: You can consider using XAMPP or a similar alternative to quickly get a PHP environment up and running locally.*

### Installation
Clone the repository to the necessary directory.

```bash
git clone https://github.com/Toxocious/Absolute.git
```

### Project Setup
For simplicity's sake, an already configured PHP server or XAMPP configuration will be assumed.

1. Create the database.

**via command line**
```bash
## Login to MySQL
user:machine >>> mysql -u root -p

## Create the database
mysql >>> CREATE DATABASE absolute;
```

**via PHPMyAdmin**
```
- Click 'New' in the left sidebar
- Name the database 'absolute'
- Set collation to 'utf8mb4_unicode_ci'
- Click the 'Create' button
```

2. Create a new MySQL user

**via command line**
```bash
## Create a new MySQL user
## NOTE :: Replace _PASSWORD_ with a secure password of your choice.
mysql >>> CREATE USER absolute@localhost IDENTIFIED BY '_PASSWORD_';

## Grant all privileges on the database table to the new user.
mysql >>> GRANT ALL PRIVILEGES ON absolute.* TO 'absolute'@'localhost';

## Verify the granted privileges
mysql >>> SHOW GRANTS FOR 'absolute'@'localhost';

## Exit out of the current MySQL session.
mysql >>> exit

## Verify that you can log in as the new user.
mysql >>> mysql -u absolute -p
```

**via PHPMyAdmin**
```
- From the main dashboard, click the 'User accounts' link in the top nav bar
- Click the 'Add user account' link'
- Set the username to 'absolute'
- Set the hostname to 'localhost'
- Set the password to something secure
- Re-type your secure password
- Grant the user all privileges
- Click the 'Go' button
- Verify that you can login as the new user
```

3. Import Absolute's database tables.
**NOTE :: Importing tables via CLI is magnitudes FASTER than using the GUI.**

You will need to clone the [Absolute Database](https://github.com/Toxocious/Absolute-Database) repository for this step.

**via command line**
```bash
## Clone the Absolute Database repository.
git clone https://github.com/Toxocious/Absolute-Database

## CD into your newly cloned Absolute Database repository
cd Absolute-Database

## Import all of the *.sql files into your database.
## Replace * with the provided .sql file name.
## Do this for each .sql file.
mysql -u root < *.sql
```

**via PHPMyAdmin**
```txt
- Select the 'absolute' database
- Click on 'Import'
- Select the .sql file to import
- Click 'Submit'
```

4. Set database credentials as environment variables.
**NOTE :: For local servers running this project, this isn't needed.**

This assumes that you're using Apache.
```bash
## Change your active directory to Apache
cd /etc/apache2

## Open the `envvars` file in your favorite editor
nano envvars

## Append the following lines
# Database table to access
export DATABASE_TABLE="absolute"

# Database user to login with
export DATABASE_USER="absolute"

# Database password to login with
# This should match the password used when the `absolute` MySQL user was created earlier.
export DATABASE_PASSWORD="_PASSWORD_"
```

### Chat Setup
The source code used for Absolute's chat system can be found [HERE](https://github.com/Toxocious/Absolute-Chat).

A separate, in-depth README with set-up documentation is included.

### Discord Bot Setup
The source code used for Absolute's Discord Bot can be found [HERE](https://github.com/Toxocious/Absolute-Discord-Bot).

A separate, in-depth README with set-up documentation is included.

### CI/CD Pipeline Setup
Absolute uses a continue integration and deployment pipeline to automatically sync the repository ``main`` branch with the remote server.

To set up a CI/CD pipeline for your local and remote Absolute environment, continue reading on.

**NOTE :: For Windows users, this will require SSH to be installed on your local machine.**

**NOTE :: The pipeline will fail if a layout/theme change has been pushed and SASS is not properly configured on the remote server.**

1. SSH into your remote server.
```bash
## SSH into the remote server.
## This will require a password.
ssh USERNAME@HOSTNAME
```

2. Generate a SSH keypair.
```bash
## Generate an SSH public:private key pair.
## This will ask you additional questions before generating the key pair.
## Take careful note of where the files are placed for generation. (usually in ~/.ssh)
## Also take careful note of what you have named the SSH key pair.
ssh-keygen
```

3. Copy the public SSH key and add it as a repository CI/CD settings variable.
```bash
## Print out the public SSH key.
## Highlight it and copy it via CTRL + SHIFT + C
cat ~/.ssh/absolute_key.pub

## In a browser on your local machine, navigate to your repository's CI/CD settings.
## https://gitlab.com/USER_NAME/REPOSITORY_NAME/-/settings/ci_cd

## Expand the ``Variables`` section.

## Add a new variable with the name of ``ABSOLUTE_PRIVATE_KEY``
## Paste in the public key that you previously copied.
## Save the variable.
```

4. Update the CI/CD script in the repository (``/.gitlab-ci.yml``) to reflect your remote server.
5. Run the pipeline.



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
