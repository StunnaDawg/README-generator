 
 const fs = require('fs;')

 const inquirer = require('inquirer');

 const questions = [
    {
        type: 'input',
        message: 'Hello',
        name: 'hi'
    }
 ];
 inquirer.prompt(questions).then(answers => {
    console.log(answers.hi);
  });