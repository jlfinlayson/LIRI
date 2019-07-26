// Grab the axios package
var axios = require("axios");

// Requires .env
require("dotenv").config();

//Grab the keys document
var keys = require("./keys.js");

// Grab the spotify keys
var spotify = new Spotify(keys.spotify);


// how it would work in a switch
// case "movie-this"
    //movie api call