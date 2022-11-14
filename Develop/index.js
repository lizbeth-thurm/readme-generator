// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [];

questions.push("What is the title of the project?");
questions.push("Provide a brief description of the project.");
questions.push("Provide installation instructions for the project.");
questions.push("Provide usage information for the project.");
questions.push("Provide contribution guidelines for the project.");
questions.push("Provide test instructions for the project.")
questions.push("What is your name?");
questions.push("What is your github username?");
questions.push("What is your email address?");

// Function to write README file
// Sections:
// Title, Description, Installation, Usage, Contributing, Tests, Licensing, Questions (includes name, github profile, and email address).

const content = 'HERE IS THE README CONTENT';

fs.writeFile('../README.md', content, err => {
    if (err) {
        console.error(err)
        return
    }
});

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
