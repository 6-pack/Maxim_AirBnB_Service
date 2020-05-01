// use 'npm pg' documentation
const { Client } = require('pg');
const { dbConfig } = require('./pg.config.js');

const client = new Client(dbConfig);

client.connect(() => {
  console.log(`Database connection achieved!`);
});

client.query('select * from roomtable', (err, results) => {
  if (err) {
    console.error(err);
  }
  console.log(results.rows);
});
