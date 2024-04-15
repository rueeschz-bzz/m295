const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        if (err) {
            console.error('Error:', err);
            return;
        }

        const dataString = data.toString();

        console.log(data.length);

        console.log(dataString);
    }));
}).on('error', (err) => {
    console.error('Error:', err);
});
