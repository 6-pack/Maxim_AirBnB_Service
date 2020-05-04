const express = require('express');
const { getRoomData } = require('./routeHandlers.js');

const app = express();

const PORT = 3000;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('public'));

// routes
app.get('/rooms', getRoomData);
