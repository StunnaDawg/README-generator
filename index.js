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
    {
        type: 'editor',
        message: 'Add the installation instructions in a list format. If using VIM editor press s to intiate, when done press esc key and type ":wq!" to submit',
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
        type: 'input',
        message: 'Provide examples and instructions of using your application.',
        name: 'usage',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Enter a valid Instructions.'
            }
        }
    },
    {
        type: 'input',
        message: 'If you would like other developers to be able to contribute to your project, add the guidelines here.',
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
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'The Unlicense']

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

${answers.license}

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