 const fs = require('fs');


 const inquirer = require('inquirer');
  


//create questions to prompt README generation
 const questions = inquirer.prompt( [
    {
        type: 'input',
        message: 'What will your project title be?',
        name: 'title',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid title.'
            }
        }
    },
    {
        type: 'input',
        message: 'Create a description that describes application. Make sure to include your motivation, the problem it solves, and what you learned.',
        name: 'description',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid Description.'
            }
        }
    },
    { //Utlized the editor type so users could easily create a list format if they wish
        type: 'editor',
        message: 'Add the installation instructions in a list format. If using VIM editor press "s" to intiate, when done press esc key and type ":wq!" to submit',
        name: 'installation',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter valid Instructions.'
            }
        }
    },
    {
        type: 'editor',
        message: 'Provide examples and instructions of using your application. If using VIM editor press "s" to intiate, when done press esc key and type ":wq!" to submit',
        name: 'usage',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid usage instructions.'
            }
        }
    },
    {
        type: 'editor',
        message: 'If you would like other developers to be able to contribute to your project, add the guidelines here. If using VIM editor press "s" to intiate, when done press esc key and type ":wq!" to submit',
        name: 'contribution',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid input for the Contribution section.'
            }
        }
    }, 
    {
        type: 'input',
        message: 'Write tests for your application here.',
        name: 'test',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid Test Description.'
            }
        }
    },
    {
        type: 'list',
        message: 'Choose your license of preference',
        name: 'license',
        choices: [
            { name: 'MIT License', value: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'This project is covered under the MIT License follow the following link for more information: https://opensource.org/licenses/MIT'] },
            { name: 'Apache License 2.0', value: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'This project is covered under the Apache License 2.0 follow the following link for more information: https://opensource.org/licenses/Apache-2.0'] },
            { name: 'GNU General Public License v3.0', value: ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'This project is covered under the GNU General Public License v3.0 follow the following link for more information: https://www.gnu.org/licenses/gpl-3.0']  },
            { name: 'BSD 2-Clause "Simplified" License', value: ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', 'This project is covered under the BSD 2-Clause "Simplified" License follow the following link for more information: https://opensource.org/licenses/BSD-2-Clause'] },
            { name: 'BSD 3-Clause "New" or "Revised" License', value: ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 'This project is covered under the BSD 3-Clause "New" or "Revised" Licensefollow the following link for more information: https://opensource.org/licenses/BSD-3-Clause'] },
            { name: 'Mozilla Public License 2.0', value: ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'This project is covered under the Mozilla Public License 2.0 follow the following link for more information: https://opensource.org/licenses/MPL-2.0)'] },
            { name: 'Creative Commons Zero v1.0 Universal', value: ['[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', 'This project is covered under the Creative Commons Zero v1.0 Universal follow the following link for more information: http://creativecommons.org/publicdomain/zero/1.0/'] }, 
            { name: 'The Unlicense', value: ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'This project is covered under The Unlicense follow the following link for more information: http://unlicense.org/'] }
        ]

    },
    {
        type: 'input',
        message: 'Enter your GitHub username!',
        name: 'github',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid GitHub username.'
            }
        }
    }, 
    {
        type: 'input',
        message: 'Enter your Email address!',
        name: 'email',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid Email address.'
            }
        }
    },
 ]).then((answers) => {

const readmeTemplate =
    `
# ${answers.title}

## Description
${answers.license[0]}

${answers.description}                       

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Testing

${answers.test}

## Contributing

${answers.contribution}

## License

${answers.license[1]}

##  Questions

If you have any questions about the project, please feel free to contact me at ${answers.email} 
My GitHub is https://github/${answers.github}.com
    
    
    `

  fs.writeFile('README.md', readmeTemplate, (err) => {
    if (err) throw err;
    console.log('README.md successfully created!');
  });

});

questions;