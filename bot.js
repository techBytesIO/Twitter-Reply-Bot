// REPLYING BOT====================
// Dependencies =========================
var
    twit = require('twit');
    config = require('./config');

var Twitter = new twit(config);

// Set up User Stream
console.log('Launching the replying bot...' + '\n');

var stream = Twitter.stream('user');

console.log('Set up the user stream' + '\n');

console.log('Listening and waiting...' + '\n');

stream.on('tweet', (t) => {
	var replyingto = t.in_reply_to_screen_name;
	var text = t.text;
	var from = t.user.screen_name;
	//console.log(from + ' sent ' + text + '\n');

  	if (replyingto == '4TunGaming') {
		var newTweet = '@' + from + ' -- Game ON!! #indie #dev #gaming';
		tweetIt(newTweet);
	}
});

function tweetIt(txt) {
	var tweet = {
		status: txt 
	}

	Twitter.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, res) {
		if (err) {
			console.log("Something went wrong!! You'll have to fix it! \n");
			console.log(err + "\n");
		} else {
			console.log("Tweet replied to!!! \n");
		}
	}
	
};

//Followed by User

stream.on('follow', (followed) => {
	var name = followed.source.name;
	var screenName = followed.source.screen_name;
	tweetIt('@' + screenName + 'Thanks for the follow!! Game on!! #indie #dev');
});

















