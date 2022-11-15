// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseImages = [
    'https://opensource.org/licenses/Apache-2.0',
    'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'https://licensebuttons.net/l/zero/1.0/80x15.png',
    'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'https://img.shields.io/badge/license-Unlicense-blue.svg'];

  if(license === 'MIT'){
   return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/License_icon-mit.svg/1024px-License_icon-mit.svg.png'
  }
  else if (license === 'Apache') {
    return licenseImages[0];
  } 
  else {
    return 'error';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project_title}

  ## Description
  ${data.project_description}
  [![GitHub license](${renderLicenseBadge(data.project_license)})]
  
  ## Table of Contents
  - [Installation][1]
  - [Usage][2]
  - [Contributing][3]
  - [Tests][4]
  - [License][5]
  - [Questions][6]
  
  [1]: ## Installation
  ${data.project_install}
  
  [2]: ## Usage
  ${data.project_usage}
  
  [3]: ## Contributing
  ${data.project_contribution}
  
  [4]: ## Tests
  ${data.project_test}
  
  [5]: ## License
  ${data.project_license}
  
  [6]: ## Questions
  GitHub Username: ${data.project_github}
  You can reach me with any questions at ${data.project_email}
`;}

module.exports = generateMarkdown;
