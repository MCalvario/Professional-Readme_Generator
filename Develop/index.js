// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "function",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "description",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "Which license would you like to include on your project?",
        choices: ['MIT','GPL', 'Apache 2.0', 'none'],
        name: "license",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "name",
    }
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
    console.log("creating professional readme.md file");
    writeToFile("README.md", generateMarkdown({data}));
});
}


//function writeToFile(fileName, response) {}

//.then((response) => {
   // const filename = `${response.name.toLowerCase().split(" ").join(" ")}.json`;
  
    //fs.writeFile(filename, JSON.stringify(response, null, `\t`), (err) =>
   // err ? console.log(err) : console.log('Success!' + response.name)
   // );     
//});

// Function call to initialize app
init();
