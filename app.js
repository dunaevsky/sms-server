// load env data
const { port } = require('./config');

const express = require('express');
const app = express();
const Routes = require('./routes/index');

// Endpoints
Routes(app);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

