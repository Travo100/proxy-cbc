var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); // get body-parser
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var userUrl = req.body.url;

  var options = {
    url: userUrl,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8'
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      res.json({ error });
    } else {
      var contentType = response['headers']['content-type'];
      //if(response["headers"]["content-type"])
      if (contentType.includes('xml')) {
        res.json({
          url: userUrl,
          data: {
            type: 'Error',
            message: 'No XML Allowed!'
          }
        });
      } else {
        res.json({
          url: userUrl,
          data: JSON.parse(body)
        });
      }
    }
  });
});


module.exports = router;
