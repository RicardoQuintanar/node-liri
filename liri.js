// require("dotenv").config();


var axios = require ("axios");
var fs = require ("fs");
var Spotify = ("node-spotify-api");
var keys = require("./keys.js")



 var Liri = function () {
    var divider = "\n------------------------------------------------------------\n\n";
  
    this.findArtist = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
      axios.get(URL).then(function (response) {
        var jsonData = response.data;
        console.log(jsonData)
        var artistData = [
          "Venue: " + jsonData.Venue,
          "Location " + jsonData.Location,
          "Date: " + jsonData.Date,
        ].join("\n\n");
          fs.appendFile("log.txt", artistData + divider, function (err) {
            if (err) throw err;
            console.log(artistData);
          });
      });
    };
  };
  module.exports = Liri;