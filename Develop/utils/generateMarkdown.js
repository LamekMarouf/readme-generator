// TODO: Create a function that returns a license badge based on which license is passed in
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
  https://github.com/${data.git}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application: ${data.installation}
  ## Usage
  In order to use this app, ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ![GitHUB license](https://img/shields.io/badge/license-MIT-blue.svg)
  ## Contribution
  Contributers to this project: ${data.contribution}
  ## Tests
  The following is needed to run the test: ${data.tests}
  ## Questions
  If you have any issues, contact me through GitHub or email.
  ### GitHub: (#github.com/${data.git})
  ### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
