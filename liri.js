var keys = require('./keys.js');

var Twitter = require('twitter');

var client = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'RyteCoding'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
    for(var i = 0; i < tweets.length; i++) {
    	console.log(' ');
        console.log(tweets[i].created_at + "\n" + tweets[i].text);
        console.log(' ');
    }
  }
});


// SPOTIFY API ========================================================================

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotifyKey);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log("Artist(s): " + data.tracks.items[0].artists[0].name); 
console.log("Song name: " + data.tracks.items[0].name);
console.log("Preview Link: " + data.tracks.items[0].preview_url);
console.log("Album: " + data.tracks.items[0].album.name);

});

// var commands = process.argv[2];

// if (commands === "my-tweets") {

// }




 








