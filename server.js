const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/hackernews/'));



app.listen(8080);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/hackernews/index.html'));
});

console.log('Sever up on port');