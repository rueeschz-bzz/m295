const net = require('net');

const port = process.argv[2];

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

function formatDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = zeroFill(now.getMonth() + 1);
    const day = zeroFill(now.getDate());
    const hours = zeroFill(now.getHours());
    const minutes = zeroFill(now.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
    socket.write(formatDate() + '\n');
    socket.end();
});

server.listen(port);
