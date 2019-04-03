// require("dotenv").config();


var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = ("node-spotify-api");
var keys = require("./keys.js")
var bandKey = keys.bandKey.apikey


var Liri = function () {
  var divider = "\n------------------------------------------------------------\n\n";

  this.findArtist = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(URL).then(function (response) {
      var jsonData = response.data;
      console.log(jsonData)
      // var artistData = [
      //   "Venue: " + jsonData.venue.name,
      //   "Location " + jsonData.country.city,
      //   "Date: " + jsonData.datetime,
      // ].join("\n\n");
      // fs.appendFile("log.txt", artistData + divider, function (err) {
      //   if (err) throw err;
      //   console.log(artistData);
      // });

    });
  };

//   this.findArtist = function (artist) {
//     var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
//     axios.get(URL).then(function (response) {
//       var jsonData = response.data.artist;
//       console.log(jsonData)
//       // var artistData = [
//       //   "Venue: " + jsonData.venue.name,
//       //   "Location " + jsonData.country.city,
//       //   "Date: " + jsonData.datetime,
//       // ].join("\n\n");
//       // fs.appendFile("log.txt", artistData + divider, function (err) {
//       //   if (err) throw err;
//       //   console.log(artistData);
//       // });

//     });
//   };
};
  module.exports = Liri;
