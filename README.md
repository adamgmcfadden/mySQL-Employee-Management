# mySQL-Employee-Management

## Project Description

![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")
![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg "License Badge")

An application that allows a business owners and/or management to manage the departments, roles and employees at their company from the command-line so they can easily organize that aspect of their business.

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Credits](#credits)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Installation Instructions

Clone the “My-SQL-Employee-Management” repository to your local directory. If not done already, ensure Node.js and mySQL are installed and configured on your workstation. At the command-line at the root of the directory, type **npm _install_** to install all pre-determined packages (inquirer, mysql2, table.console, dotenv). 

Create a .env file at the root of the directory, and inside add the following lines of code:
- DB_HOST='localhost'
- DB_USER='< your_mySQL_username >'
- DB_PASS='< your_mySQL_password >'

Sign into your mySQL and type the following commands:
- USE employees;
- source db/db.sql;
- source db/schema.sql;
- source db/seeds.sql;

Congrats! All the required packages have been installed and you're ready to use the app. 

## Usage

See instructional video: [Instructional Video](https://drive.google.com/file/d/1KlE_hbW022qqS7Rj9GLNL1_vI9MVx_ZY/view) 

**Screenshot of App Main Screen**

![Screenshot](https://user-images.githubusercontent.com/83710803/129384374-e16b4bc2-88bd-4501-9a33-53279e847832.png)

## Credits

Project idea and mock-up provided by Carleton University. All code provided by Adam Girard-McFadden. I used the mock-up "title-picture" as 
a template to build my "title-picture". 

## Licenses

For more information on the Licenses used, click on the links below.

[License: MIT](https://choosealicense.com/licenses/mit/)

[License: BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)

Copyright © 2021 [ADAM GIRARD-MCFADDEN](https://github.com/adamgmcfadden)

## Contributing

Other developers may add and update any code at their leisure. For more info, contact me using email address provided below.

## Contact Information

Contact me via my github profile or email address (links below)

- Github Username: [adamgmcfadden](https://github.com/adamgmcfadden)
- Email address: adam_m_20@hotmail.com
