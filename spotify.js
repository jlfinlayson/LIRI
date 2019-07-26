var axios = require("axios");
var fs = require("fs");

var LIRI = function() {
    var divider = "\n------------------------------------------------------------\n\n";

this.concert-this = function(value){
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response){
        // var jsonData = response.data;

        // var concertData = [
        //     "Venue: " +jsonData.venue
        //     "Location: "
        //     "Date: "
        // ].join("\n\n");
   
        fs.appendFile("log.txt", concertData + divider, function(err) {
            if (err) throw err;
            console.log(concertData);
          });
    
    })
}


}


module.exports = LIRI;