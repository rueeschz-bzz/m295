const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
    // Read the directory asynchronously
    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err);
        }

        // Filter files by extension
        const filteredFiles = files.filter(file => {
            return path.extname(file) === '.' + extension;
        });

        // Call the callback with null for the error and the filtered files
        callback(null, filteredFiles);
    });
};
