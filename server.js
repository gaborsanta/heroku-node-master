var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format

	 var accountSid = 'ACd8a0efd010e09e09ce506fe1d4612e11';
	 var authToken = '49bb0dcc9d997acf2e30c830b2859e0b';


		 //require the Twilio module and create a REST client
	 var client = require('twilio')(accountSid, authToken);


	 client.messages.create({
			 to: req.body.To,
			 from: req.body.From,
			 body: req.body.Body,
	 }, function(err, message) {
			 console.log(message.sid);
			 console.log(err);
	 });

});


/* app.post("/", function(req, res){

    console.log("a user has request /the-form via POST");

		    //form processing code goes here....
		//var accountSid = 'ACd8a0efd010e09e09ce506fe1d4612e11';
		var accountSid = 'ACd8a0efd010e09e09ce506fe1d4612e11';
		var authToken = '49bb0dcc9d997acf2e30c830b2859e0b';


			//require the Twilio module and create a REST client
		var client = require('twilio')(accountSid, authToken);


		client.messages.create({
		    to: "+16463316126",
		    from: "+19179243374",
		    body: "This message is from Gabor",
		}, function(err, message) {
		    console.log(message.sid);
		});
    //send message to user
    //response.send("okay, we'll process that right away.")
});
*/
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
