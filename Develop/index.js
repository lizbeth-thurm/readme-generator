// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        type: 'list',
        name: 'project_license',
        message: 'Provide license for the project.',
        choices: ['MIT','Apache'],
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

inquirer.prompt(questions).then((answers) => {

    const content = generateMarkdown(answers);

    writeToFile('README.md', answers);

    function writeToFile(fileName, data) {
        fs.writeFile('../README.md', content, (err) => 
            err ? console.log(err) : console.log('Created readme')
        )
    } 
    
})

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
