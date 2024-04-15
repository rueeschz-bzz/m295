const fs = require('fs');

const filePath = process.argv[2];

const fileContent = fs.readFileSync(filePath);

const fileContentString = fileContent.toString();

const numberOfLines = fileContentString.split('\n').length - 1;

console.log(numberOfLines);
