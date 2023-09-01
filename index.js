const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices:['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'list',
      message: 'What is your preferred color',
      name: 'color',
      choices: ['Red', 'Yellow', 'Blue'],
    },
    {
      type: 'input',
      message: 'What Text do you want to show (3 characters max)?',
      name: 'text',
    },
  ])
  .then((data) => {
      data ? console.log(data) : console.log('Failed')
  });
