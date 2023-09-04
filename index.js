const inquirer = require('inquirer');
const fs = require('fs');

const {Triangle, Square} = require('./lib/shapes')


function promptUser(){
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
  .then((answer) => {
    if (answer.text.length >3){
      console.log("3 Characters max");
      promptUser();
    }else{
      console.log(answer);
      fs.writeFile('logo.svg',answer);
    }
  });

}

promptUser();