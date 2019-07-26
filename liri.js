//Grap Spotify.js
var LIRI = require("./spotify.js");

// Grab the axios package
var axios = require("axios");

//Requires fs
var fs = require("fs");

// Requires .env
require("dotenv").config();

//Grab the keys document
var keys = require("./keys.js");

// Grab the spotify keys
var spotify = new Spotify(keys.spotify);


//Gives command line statements meaning 
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");

//what to do when each argument is given
switch (action){
    case "concert-this":
        concert(value);
        break;
    
    case "spotify-this-song":
        spotifySong(value);
        break;

    case "movie-this":
        movie(value);
        break;

    case "do-what-it-says":
        random();
        break;
}
