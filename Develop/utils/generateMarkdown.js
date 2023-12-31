// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link


// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

  function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  This project was built to generate a readme file template with the questions and information needed to complete a functional and professional readme file.
  ${data.description}

  ## Deployed Application URL
  https://github.com/MCalvario/Professional-Readme_Generator
  ${data.link}
  ## Screenshot
  ![alt-text](Professional-Readme_Generator/readme.png)
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  To create the readme file using this readme generator application, type "node index.js" in the terminal (make sure you are in the correct file).  Then answer the questions that are prompted for you to answer.  Upon completing the questions, a new readme file will populate with the input you entered from the questions prompted.
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  If you have any questions, please visit [github](https://github.com/MCalvario/Professional-Readme_Generator).
  `;
  }


module.exports = generateMarkdown;
