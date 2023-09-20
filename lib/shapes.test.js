// pulled from readme:
/*
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

*/


let shapeElement;
  if (shape === 'triangle') {
    shapeElement = canvas.polygon([[width / 2, 10], [10, height - 10], [width - 10, height - 10]]);
  } else if (shape === 'circle') {
    shapeElement = canvas.circle(width / 2).center(width / 2, height / 2);
  } else if (shape === 'rectangle') {
    shapeElement = canvas.rect(width, height);
  }







// To run Jest type: npm install jest in the terminal. 
// npm run test 