// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";}
    else if (license === "GNU v3"){
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if(license === "ISC"){
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else {
      return ""
    }
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.Title}

  ## Table of Content
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contribution](#Contribution)
  -[Questions](#Questions)
  -[Test](#Test)
  -[License](#License)

  ## Description
  ${userInput.Description}

  ## Installation
  ${userInput.Installation}

  ## Usage
  ${userInput.Usage}

  ## Contribution
  ${userInput.Contribution}

  ## Questions
  ${userInput.Email}
  ${userInput.Github}

  ## Test 
  ${userInput.Test}

  ## License
  ${userInput.License}

`;
}

module.exports = generateMarkdown;
