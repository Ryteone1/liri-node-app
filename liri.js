var keys = require('./keys.js');

var fs = request('fs');

var command = process.argv[2];

// TWITTER API ==========================================================

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

var musicInfo = data.tracks.items
for (var j = 0; j < musicInfo.length; j++) {
	console.log("Artist(s): " + musicInfo[j].artists[0].name); 
	console.log("Song name: " + musicInfo[j].name);
	console.log("Preview Link: " + musicInfo[j].preview_url);
	console.log("Album: " + musicInfo[j].album.name);
}
});


// if (commands === "my-tweets") {

// }


// OMDB API REQUEST =======================================================

var request = require('request');

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Rated);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});





 








