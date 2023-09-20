class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

// Circle:

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="190" r="160" fill="${this.color}" />;
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

// Triangle:

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="180, 18 244, 182 56,182" fill=${this.color}"/>;
    <text x="100" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

// Square

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    // You can make the SVG dimensions dynamic by passing width and height as parameters
    const svgWidth = 200; // Change as needed
    const svgHeight = 200; // Change as needed

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.shapeColor}" />
    <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

/*  async function to set shape     */

async function setShape(response) {
  if (response.shape === "Circle") {
    let selectedShape = new Circle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return selectedShape.render();
  } else if (response.shape === "Triangle") {
    let selectedShape = new Triangle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return selectedShape.render();
  } else if (response.shape === "Square") {
    let selectedShape = new Square(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return selectedShape.render();
  } else {
    throw new Error("Please select a shape");
  }
}

module.exports = { setShape: setShape, Circle, Triangle, Square };

/* git commit -m "    "






*/
