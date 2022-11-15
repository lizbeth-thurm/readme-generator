// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseImages = [
    'https://img.shields.io/badge/License-Apache_2.0-blue',
    'https://img.shields.io/badge/License-GPLv3-blue',
    'https://img.shields.io/badge/License-BSD_2--Clause-orange',
    'https://img.shields.io/badge/License-BSD_3--Clause-blue',
    'https://img.shields.io/badge/License-Boost_1.0-lightblue',
    'https://licensebuttons.net/l/zero/1.0/80x15',
    'https://img.shields.io/badge/License-EPL_1.0-red',
    'https://img.shields.io/badge/License-AGPL_v3-blue',
    'https://img.shields.io/badge/License-GPL_v2-blue',
    'https://img.shields.io/badge/License-LGPL_v3-blue',
    'https://img.shields.io/badge/License-MIT-yellow',
    'https://img.shields.io/badge/License-MPL_2.0-brightgreen',
    'https://img.shields.io/badge/license-Unlicense-blue'];

  if (license === 'Apache') {
    return licenseImages[0];
  }
  else if (license === 'GPL_3') {
    return licenseImages[1];
  }
  else if (license === 'BSD_2') {
    return licenseImages[2];
  }
  else if (license === 'BSD_3') {
    return licenseImages[3];
  }
  else if (license === 'Boost') {
    return licenseImages[4];
  }
  else if (license === 'CC Zero') {
    return licenseImages[5];
  }
  else if (license === 'EPL') {
    return licenseImages[6];
  }
  else if (license === 'AGPL') {
    return licenseImages[7];
  }
  else if (license === 'GPL_2') {
    return licenseImages[8];
  }
  else if (license === 'LGPL') {
    return licenseImages[9];
  }
  else if (license === 'MIT') {
    return licenseImages[10];
  }
  else if (license === 'MPL') {
    return licenseImages[11];
  }
  else if (license === 'Unlicense') {
    return licenseImages[12];
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenseLinks = [
    'https://opensource.org/licenses/Apache-2.0',
    'https://www.gnu.org/licenses/gpl-3.0',
    'https://opensource.org/licenses/BSD-2-Clause',
    'https://opensource.org/licenses/BSD-3-Clause',
    'https://www.boost.org/LICENSE_1_0.txtcre',
    'http://creativecommons.org/publicdomain/zero/1.0/',
    'https://opensource.org/licenses/EPL-1.0',
    'https://www.gnu.org/licenses/agpl-3.0',
    'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'https://www.gnu.org/licenses/lgpl-3.0',
    'https://opensource.org/licenses/MIT',
    'https://opensource.org/licenses/MPL-2.0',
    'http://unlicense.org/'];

    if (license === 'Apache') {
      return licenseLinks[0];
    }
    else if (license === 'GPL_3') {
      return licenseLinks[1];
    }
    else if (license === 'BSD_2') {
      return licenseLinks[2];
    }
    else if (license === 'BSD_3') {
      return licenseLinks[3];
    }
    else if (license === 'Boost') {
      return licenseLinks[4];
    }
    else if (license === 'CC Zero') {
      return licenseLinks[5];
    }
    else if (license === 'EPL') {
      return licenseLinks[6];
    }
    else if (license === 'AGPL') {
      return licenseLinks[7];
    }
    else if (license === 'GPL_2') {
      return licenseLinks[8];
    }
    else if (license === 'LGPL') {
      return licenseLinks[9];
    }
    else if (license === 'MIT') {
      return licenseLinks[10];
    }
    else if (license === 'MPL') {
      return licenseLinks[11];
    }
    else if (license === 'Unlicense') {
      return licenseLinks[12];
    }
    else {
      return '';
    }




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
  ![GitHub license](${renderLicenseBadge(data.project_license)})
  
  [Link to License](${renderLicenseLink(data.project_license)})
  
  ## Table of Contents
  - [Installation][1]
  - [Usage][2]
  - [Contributing][3]
  - [Tests][4]
  - [License][5]
  - [Questions][6]
  
  [1]: ## Installation
  ${data.project_installation}
  
  [2]: ## Usage
  ${data.project_usage}
  
  [3]: ## Contributing
  ${data.project_contribution}
  
  [4]: ## Tests
  ${data.project_test}
  
  [5]: ## License
  ${data.project_license}
  
  [6]: ## Questions
  GitHub Username: /n${data.project_github}
  You can reach me with any questions at: /n ${data.project_email}
`;
}

module.exports = generateMarkdown;
