var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var cors = require('cors')

router.use(cors())

var pool = mysql.createPool({
  connectionLimit: 10,
  host: '132.232.0.240',
  user: 'yxy',
  password: 'test',
  database: 'mydb'
})

router.get('/', function (req, res) {
  res.end('Hello World!');
});

router.get('/user', function (req, res) {
  pool.query('select * from websites', function (error, results, fields) {
    if (error) return console.log('卧槽他妈的出错了:', error);
    res.end(JSON.stringify(results))
  });

})

module.exports = router;