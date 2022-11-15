// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'project_description',
        message: 'Please provide a description of the project.',
    },
    {
        type: 'input',
        name: 'project_installation',
        message: 'Provide installation instructions for the project.',
    },
    {
        type: 'input',
        name: 'project_usage',
        message: 'Provide usage information for the project.',
    },
    {
        type: 'input',
        name: 'project_contribution',
        message: 'Provide contribution guidelines for the project.',
    },
    {
        type: 'input',
        name: 'project_test',
        message: 'Provide test instructions for the project.',
    },
    {
        type: 'input',
        name: 'project_name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'project_github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'project_email',
        message: 'What is your email address?',
    },
]

// Function to write README file
// Sections:
// Title, Description, Installation, Usage, Contributing, Tests, Licensing, Questions (includes name, github profile, and email address).

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    
    const content = JSON.stringify(answers);
    
    fs.writeFile('../README.md', content, err => {
        if (err) {
            console.error(err)
            return
        }
    });
  });

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
