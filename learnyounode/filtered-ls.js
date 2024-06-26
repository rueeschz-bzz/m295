const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    const filteredFiles = files.filter(file => {
        return path.extname(file) === '.' + fileExtension;
    });

    filteredFiles.forEach(file => {
        console.log(file);
    });
});
