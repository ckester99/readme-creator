const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "Input description",
            name: "desc",
        },
        {
            type: "input",
            message: "Input installation instructions",
            name: "installInst",
        },
        {
            type: "input",
            message: "Input usage information",
            name: "usageInfo",
        },
        {
            type: "input",
            message: "Input contribution guidelines",
            name: "contGuide",
        },
        {
            type: "input",
            message: "Input test instructions",
            name: "testInst",
        },
        {
            type: "list",
            message: "Choose License",
            name: "license",
            choices: ["a", "b", "c"],
        },
        {
            type: "input",
            message: "Enter github username",
            name: "user",
        },
        {
            type: "input",
            message: "Enter email address",
            name: "email",
        },
    ])
    .then((r) => fs.writeFile("./outputs/README.md", markdown.create(r), (e) => (e ? console.error(e.message) : console.log("Success!"))));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
