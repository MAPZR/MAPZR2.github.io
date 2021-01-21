const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const port = 3080;
let number = 2;
const users1 = [
    { name: "Pera", age: 41},
    { name: "Paja", age: 22}
];

const users2 = [
    { name: "Mika", age: 25},
    { name: "Zika", age: 35}
];

app.use(bodyParser.json());

// We have to use express.static to let express know there are a build folder and assets of the React build.
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Only for production

app.get('/api/users', (req, res) => {
    console.log('api/users called!');

    number++;
    let users = [];

    if ((number % 2) === 0) {
        users = users1;
    } else {
        users = users2;
    }

    res.json(users);
});

app.get('/', (req, res) => {
    // Load index.html for the default route
    res.sendFile(path.join(__dirname, '../frontend/build/index.html')); // Only for production
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
