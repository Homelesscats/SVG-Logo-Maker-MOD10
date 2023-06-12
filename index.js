const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Square, Triangle } = require('./shape');


// questions for the creation of the new logo:
const questions =  

[


  {
  type: 'input',
  name: 'Logo Name ',
  message: 'Please enter text, cannot be more than 3 letters',    
  validate: text => {
     if (text.length > 3) {
       return 'Text must not exceed 3 characters';

     }
     return true; 
  } 

},

  {
  type: 'input',
  name: 'Text-Color',
  message: 'Please enter a text color', // Be sure to allow keyword or hexadecimal number 
  }, 

  {
   type: 'list',
   name: 'shape',
   message: 'Please select a shape',
   choices: ['circle, triangle, square',]
  },

  {
   type: 'input',
   name: 'color',
   message:'Please enter a color for the shape', // Be sure to allow keyword or hexadecimal number 
  },
  
]

