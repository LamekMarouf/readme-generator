// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What's the project title",
        name: "title",
        validate: (value) =>{ if(value){return true} else {return "I need a title!"}},
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
        validate: (value) =>{ if(value){return true} else {return "I need a description!"}},
    },

    {
        type: "input",
        message: "Table of Contents",
        name: "contents",
    },

    {
        type: "input",
        message: "What does the user need to install to use your app?",
        name: "installation",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "How do you use your app?",
        name: "usage",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "What license is being used?",
        name: "license",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution",
    },

    {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "tests",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "Contact info for inquiries",
        name: "questions",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "GitHub username:",
        name: "git",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    },

    {
        type: "input",
        message: "Email:",
        name: "email",
        validate: (value) =>{ if(value){return true} else {return "I need a value!"}},
    }

]


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// // TODO: Create a function to initialize app
function init() {
}

// // Function call to initialize app
init();
