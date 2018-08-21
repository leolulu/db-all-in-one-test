var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '132.232.0.240',
  user: 'yxy',
  password: 'test',
  database: 'mydb'
});

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/user', function (req, res) {
  connection.query('select * from websites', function (error, results, fields) {
    if (error) return console.log(error);
    res.json(results)
  });

  connection.end();
})


module.exports = router;