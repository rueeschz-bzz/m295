const express = require('express');
const app = express();

const username = process.env.USERNAME || 'zli';
const password = process.env.PASSWORD || 'zli1234';

const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`) {
        res.set('WWW-Authenticate', 'Basic realm="Zugriffsbereich"');
        return res.status(401).send('Unauthorisiert');
    }
    res.set('Cache-Control', 'no-store');
    next();
};

app.get('/public', (req, res) => {
    res.send('Dies ist ein öffentlicher Endpunkt');
});

app.get('/private', basicAuth, (req, res) => {
    res.send('Dies ist ein geschützter Endpunkt');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
