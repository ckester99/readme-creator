function create(answers) {
    const { title, desc, installInst, usageInfo, contGuide, testInst, license, user, email } = answers;

    console.log(license);
    const template = `
# ${title}
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
You can contact my via my github or by email at ${email}
`;

    return template;
}

module.exports = { create };
