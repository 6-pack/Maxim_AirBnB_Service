const express = require('express');

const app = express();

// serve up static files

const PORT = 3000;
app.listen(PORT, `Express server listening on port#${PORT}`);

// routes