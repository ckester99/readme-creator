function create(answers) {
    const { title, desc, installInst, usageInfo, contGuide, testInst, license, user, email } = answers;

    const template = `
# ${title} ${getLicenseBadge(license)}
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

function getLicenseBadge(l) {
    switch (l) {
        case "apache2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "boost":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "cc1.0":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "gnu gpl v3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
}

module.exports = { create };
