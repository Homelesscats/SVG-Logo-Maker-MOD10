
const fs = require(/node_modules/);
const inquirer = require('inquirer');
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
  message: 'Please enter a text color or hexadecimal:', // Be sure to allow keyword or hexadecimal number 
  }, 

  {
   type: 'list',
   name: 'shape',
   message: 'Please select a shape',
   choices: ['Circle, Triangle, Square',]
  },

  {
   type: 'input',
   name: 'shapeColor',
   message:'Please select a color or enter a hexadecimal for the shape', // Be sure to allow keyword or hexadecimal number 
  },
  
]

// Saves to SVG file 

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  const logo = generateLogo(text, textColor, shape, shapeColor);
  fs.writeFile('./logo.svg', logo, err => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
     console.log("Generated logo.svg");
    }
  });
});

//Generate logo:

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeSvg;
    switch(shape) {
      case 'Circle':
        shapeSvg = new Circle();
        break;
      case 'Square':
        shapeSvg = new Square();
        break;
      case 'Triangle':
        shapeSvg = new Triangle();  
        break;
    }
  shapeSvg.colorChoice(shapeColor)
  return `<svg width="300" height="200" xmlns="https://www.w3.org/2000/svg">
   ${shapeSvg.render()}
   <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
  
  </svg>`;   
}
