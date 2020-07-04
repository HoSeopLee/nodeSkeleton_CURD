const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'lee',
  password: '',
  database: 'name',
});

module.exports = pool;
