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


// how it would work in a switch
// case "movie-this"
//movie api call

//Gives command line statements meaning 
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");

switch (action){
    case "concert-this":
        concert-this(value);
        break;
    
    case "spotify-this-song":
        spotify-this-song(value);
        break;

    case "movie-this":
        movie-this(value);
        break;

    case "do-what-it-says":
        do-what-it-says();
        break;
}
