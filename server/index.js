const express = require('express');
const { getRoomData } = require('./routeHandlers.js');

const app = express();

const PORT = 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// routes
app.get('/rooms', getRoomData);
