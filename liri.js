var keys = require('./keys.js');

var Twitter = require('twitter');

// var getMyTweets = function() {

var client = new Twitter(keys.twitterKeys);

// var client = new Twitter({
//   consumer_key: '0IZOJmyiV1diROJa285Umg2R6',
//   consumer_secret: 'EAdUMcL7F3ICCTiKbAjURH1S7ke5BKgyWAONXPbrKbauZ71zoQ',
//   access_token_key: '915628475947606018-bAC0U5RECQfjNedDEQCg3dAoM9o2Ggq',
//   access_token_secret: 'VMysD4h3M2FR226PJz10ESCbUhtkNv5bH1MDIXeEB7hzi'
// });
 
var params = {screen_name: 'RyteCoding'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    // for(var i = 0; i < tweets.length; i++) {
    //     console.log(tweets[i].created_at);
    //     console.log(' ');
    //     console.log(tweets[i].text);
    // }
  }
});

// }

// var pick = function(caseData, functionData) {
//     switch(caseData) {
//         case 'my-tweets' :
//         getMyTweets();
//         break;
//     default:
//     console.log('LIRI does not know that');
//     }
// }

// var runThis = function(argOne, argTwo) {
//     pick(argOne, argTwo);
// }

// runThis(process.argv[2], process.argv[3]);
 








