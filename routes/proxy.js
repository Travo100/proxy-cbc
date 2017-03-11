var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); // get body-parser
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
   var userUrl = req.body.url;

  request(userUrl, function(error, response, body) {
    var resp = JSON.parse(body);
    res.json({
      url: userUrl,
      data: resp
    });
  });
});

module.exports = router;
