function create(answers) {
    const { title, desc, installInst, usageInfo, contGuide, testInst, license, user, email } = answers;

    const template = `
# ${title}
#### Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
## Description
${desc}
## Installation Instructions
${installInst}
## Usage
${usageInfo}
## Contributing
${contGuide}
## Tests
${testInst}
## Questions
You can contact my via my [github](https://github.com/${user}) or at ${email}
`;

    return template;
}

module.exports = { create };
