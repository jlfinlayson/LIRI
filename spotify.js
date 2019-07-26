var axios = require("axios");
var fs = require("fs");

var LIRI = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    //concert-this    
    this.concert = function () {
        var URL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var concertData = [
                "Venue: " + jsonData.venue.name,
                "Location: " + jsonData.venue.city,
                "Date: " + jsonData.datetime
            ].join("\n\n");

            fs.appendFile("log.txt", concertData + divider, function (err) {
                if (err) throw err;
                console.log(concertData);
            });

        })
    };
};

//spotify-this-song
this.spotifySong = function () {
    // var URL = ;

    axios.get(URL).then(function (response) {
        var jsonData = response.data;
        if (!response) {
            response = "The Sign";
        } else {

            // var songData = [
            //     "Artist(s): " + jsonData.
            //     "Title: " + jsonData.
            //     "Link: " + jsonData.
            //     "Album: " + jsonData.
            // ].join("\n\n");
        }

        fs.appendFile("log.txt", songData + divider, function (err) {
            if (err) throw err;
            console.log(songData);
        });

    })
};;


//movie-this
this.movie = function () {
    var URL = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(function (response) {
        var jsonData = response.data;
        if (!response) {
            response = "Mr. Nobody";
        } else {

            var movieData = [
                "Title: " + jsonData.Title,
                "Release Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.Ratings[0].value,
                "Rotten Tomatoes Rating: " + jsonData[1].value
            ].join("\n\n");
        }
        fs.appendFile("log.txt", movieData + divider, function (err) {
            if (err) throw err;
            console.log(movieData);
        });

    })
};


//do-what-it-says
this.random = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            spotifySong(data);
            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        }

    })
};


module.exports = LIRI;