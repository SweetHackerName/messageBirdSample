// Load Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Load and initialize MesageBird SDK
var messagebird = require('messagebird')(process.env.MESSAGEBIRD_API_KEY);

// Set up and configure the Express framework
console.log("starting up");
var app = express();
//app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static('public'))
console.log('after static');

app.post('/api/sendText', function(req, res){
  console.log(req.body.msg);
  //TODO - validate that this is a valid number, not 911, etc.
  //does messagebird API have protections against that kind of thing already?
  messagebird.messages.create({
      originator : 'PartyTime',
      recipients : [req.body.msg],
      body : 'Come out for drinks at x tonight'
  }, function (err, response) {
      if (err) {
          // Request has failed
          console.log(err);
          res.send({ result : "error"});
      } else {
          // Request was successful
          console.log(response);
          res.send({ result : 'success'});
      }
  });
});

// Start the application
app.listen(8080);
