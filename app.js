// imports
const Toolog = require('toolog');
const express = require('express');
const routes = require('./routes');


// initialization
const app = express();
const log = new Toolog('lo-at');


// constants
const PORT = process.env.LOAT_PORT || 3000;


// we all like a nice CLI banner from time to time..
log.banner('Welcome to Lo-At!');


// add api routes
for (const namespace in routes)
    app.use('/api/v1', routes[namespace]);


// handle 404
app.use((req, res) => {
    res.status(404).end('Ani lo babit... leh mipo!');
});


// start server
log.info('Starting server');
app.listen(PORT, error => {
    if (error)
        log.error('Something broke!', error);
    else
        log.info(' -> Listening @ http://localhost/');
});