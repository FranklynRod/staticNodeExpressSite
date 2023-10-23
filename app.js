const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

app.set('view engine', 'pug');

app.get('/'(req, res) => {
    res.render('index');
});

app.get()


app.listen(3000)