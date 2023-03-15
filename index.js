 const fs = require('fs');


 const inquirer = require('inquirer');

//create questions to prompt README generation
 const questions = [
    {
        type: 'input',
        message: 'What will your project title be?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Create a description that describes application. Make sure to include your motivation, the problem it solves, and what you learned.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Add the installation instructions in a list format.',
        name: 'installtion'
    },
    {
        type: 'input',
        message: 'Provide examples and instructions of using your application.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If you would like other developers to be able to contribute to your project, add the guidelines here.',
        name: 'contribution'
    }, 
    {
        type: 'input',
        message: 'Write tests for your application here.',
        name: 'test'
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
        name: 'github'
    }, 
    {
        type: 'input',
        message: 'Enter your Email address!',
        name: 'email'
    },
 ];
 inquirer.prompt(questions).then(answers => {
    console.log(answers.license);
  });

const readmeTemplate = [
    `
# Project Title

## Description

What is the project about? What problem does it solve? What technologies were used?

## Table of Contents

- Installation
- Usage
- Testing
- Contributing
- License
- Questions

## Installation

How can someone install the project on their own machine? Are there any dependencies or requirements? What commands need to be run?

## Usage

How can someone use the project? Are there any specific instructions or guidelines? Are there any examples of usage?

## Testing

What tests are included with the project? How can someone run the tests? Are there any special considerations or requirements for running the tests?

## Contributing

How can someone contribute to the project? Are there any guidelines for contributions? Are there any specific areas that need contributions?

## License

What license is the project released under? What are the terms and conditions of the license? Are there any restrictions or limitations?

##  Questions

If you have any questions about the project, please feel free to contact us at contact@example.com.
    
    
    `
]

  fs.writeFile('READme.md', readmeTemplate, (err) => {
    if (err) throw err;
    console.log('README.md successfully created!');
  });