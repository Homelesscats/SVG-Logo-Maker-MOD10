const inquirer = require("inquirer");
const fs = require("fs");



const questions = 


[
  {
  type: 'input',
  name: 'text',
  message: 'Please enter text',    // This will need to be set enter up to 3 characters 
  },

  {
  type: 'input',
  name: 'text',
  message: 'Please enter a text color', // Be sure to allow keyword or hexadecimal number 
  }, 

  {
   type: 'list',
   name: 'shape',
   message: 'Please select a shape',
   choices: 'circle, triangle, square',
  },

  {
   type: 'input',
   name: 'name',
   message:'Please enter a color for the shape', // Be sure to allow keyword or hexadecimal number 
  },


];


