 


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
        choices: ['MIT','Raw','hotdog']
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