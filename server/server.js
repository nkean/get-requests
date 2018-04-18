const express = require('express');
const app = express();
const PORT = 5000;

const randomQuote = require('./modules/random-quote');
const quotes = require('./modules/quotes-data');

app.use(express.static('server/public'));

app.get('/all-quotes', (req, res) => {
    res.send(quotes);
});

app.get('/quote', (req, res) => {
    res.send(randomQuote(quotes));
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});