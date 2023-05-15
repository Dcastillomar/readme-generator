//packages needed for this application
const fs= require("fs");
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require("./utils/generateMarkdown");
//array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of the project?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of the project?",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the installation instructions?",

    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage information?",

    },
    {
        type: "input",
        name: "Contribution",
        message: "What are the contribution guidelines?",

    },
    {
        type: "input",
        name: "Email",
        message: "For questions email--____________ ?",

    },
    {
        type: "input",
        name: "Github",
        message: "For questions look at my Github page--____________?",

    },
    {
        type: "input",
        name: "Test",
        message: "How can you test this project?",

    },
    {
        type: "list",
        name: "License",
        message: "What type of license?",
        choices: ["MIT","GNU", "ISC"],

        filter(val){
            return val
        }

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput, (err) => {
        if (err) {
            console.error(err);
        }
    })
   
   
}

// TODO: Create a function to initialize app
function startUp() {
  return inquirer.prompt(questions)
    .then((userInput) => {
        const createReadME = (generateMarkdown(userInput));
        writeToFile("exampleREADME.md", createReadME);
    })
    
    
}

// Function call to initialize app
startUp();
