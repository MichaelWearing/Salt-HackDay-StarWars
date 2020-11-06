const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/express', (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*');
    res.send({ express: 'Hello from express!' });
})

app.get('/:id', async (req, res) => {
    const id =  req.params.id;
    res.header('Access-Control-Allow-Origin', '*');
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    res.json(body);
})

app.get('/luke', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const response = await fetch('https://swapi.dev/api/people/1/');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    res.json(body);
})

app.get('/R2-D2', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const response = await fetch('https://swapi.dev/api/people/3/');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    res.json(body);
})

app.get('/DarthVader', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const response = await fetch('https://swapi.dev/api/people/4/');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    res.json(body);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


//Proxxy to link the 2 ???
// "proxy": "localhost:5000"