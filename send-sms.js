// Twilio Credentials
var accountSid = 'ACd8a0efd010e09e09ce506fe1d4612e11';
var authToken = '49bb0dcc9d997acf2e30c830b2859e0b';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+16463316126",
    from: "+19179243374",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message.sid);
});
