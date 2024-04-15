const mymodule = require('learnyounode/mymodule');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Call the function from mymodule.js passing the directory, extension, and callback
mymodule(directoryPath, fileExtension, (err, data) => {
    if (err) {
        console.error("Error:", err);
        return;
    }

    // Print the filtered files
    data.forEach(file => {
        console.log(file);
    });
});
