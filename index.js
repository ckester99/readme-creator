const markup = require("./html-template");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "Where do you live?",
            name: "place",
        },
        {
            type: "input",
            message: "What is your LinkedIn URL?",
            name: "linkedinUrl",
        },
        {
            type: "input",
            message: "What is your GitHub URL?",
            name: "githubUrl",
        },
    ])
    .then((r) => markup.create([r.name, r.place, r.linkedinUrl, r.githubUrl]));
