const fs = require("fs");

function create(args) {
    const [name, place, linkedin, github] = args;

    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} Personal Page</title>
</head>
<body>
    <h1>${name}</h1>
    <p>Hi! My name is ${name}, I live in ${place}! <br><a href="${linkedin}">Here is my LinkedIn profile!</a><br><a href="${github}">Here is my Github profile!</a></p>
</body>
</html>
`;
    fs.writeFile(`${name}.html`, template, (e) => (e ? console.error(e.message) : console.log("Success!")));
}
module.exports = { create };
