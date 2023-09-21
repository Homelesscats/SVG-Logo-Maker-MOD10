const inquirer = require("inquirer");
const fs = require("fs");
const { setShape } = require("./lib/shapes.js");

const colorKeywordChoices = [
  "black",
  "blue",
  "brown",
  "cyan",
  "gold",
  "gray",
  "grey",
  "green",
  "indigo",
  "magenta",
  "maroon",
  "navy",
  "olive",
  "orange",
  "pink",
  "purple",
  "red",
  "tan",
  "teal",
  "turquoise",
  "violet",
  "white",
  "yellow",
];
const fileName = "./examples/logo.svg";

const promptQuestions = [
  {
    type: "list",
    name: "shape",
    message:
      "What shape would you like to use as your logo? Please select ONE from the list.",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "text",
    message: "Please choose up tp 3 letters to place on your logo.",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log("Please choose up to 3 characters for your text!");
      }
      return true;
    },
  },
  {
    name: "shapeColorChoice",
    message:
      "Please choose a method to input your color choice in the next question.",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like to use for the color of your shape?",
    when: (answers) => {
      if (answers.shapeColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0; i < colorKeywordChoices.length; ++i) {
        if (answerLowercase.indexOf(colorKeywordChoices[i]) != -1) {
          return true;
        }
      }
      return console.log("Please enter a valid color keyword.");
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What hexadecimal number (#CCCCCC) would you like to use for the color of your shape?",
    when: (answers) => {
      if (answers.shapeColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log(
          "Please enter a valid hexadecimal number starting with '#' for the color of your shape."
        );
      }
      return true;
    },
  },
  {
    name: "textColorChoice",
    message:
      "Please choose a method to input your color choice in the next question.",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "textColor",
    message: "What color would you like to use for the color of your text?",
    when: (answers) => {
      if (answers.textColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0; i < colorKeywordChoices.length; ++i) {
        if (answerLowercase.indexOf(colorKeywordChoices[i]) != -1) {
          return true;
        }
      }
      return console.log("Please enter a valid color keyword.");
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What hexadecimal number (#CCCCCC) would you like to use for the color of your text?",
    when: (answers) => {
      if (answers.textColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log(
          "Please enter a valid hexadecimal number starting with '#' for the color of your text."
        );
      }
      return true;
    },
  },
];

async function createLogo(response) {
  try {
    const svg = await setShape(response);
    fs.writeFile(fileName, svg, (err) => {
      if (err) throw err;
      console.log("Successfully generated logo.svg!");
    });
  } catch (err) {
    console.log(err);
  }
}

async function init() {
  try {
    const response = await inquirer.prompt(promptQuestions);
    await createLogo(response);
  } catch (err) {
    console.log(err);
  }
}

init();
