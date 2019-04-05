// require("dotenv").config();


var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var chalk= require("chalk");
var Spotify = ("node-spotify-api");
var keys = require("./keys.js")
var bandKey = keys.bandKey.apikey


var Liri = function () {
  var divider = "\n------------------------------------------------------------\n\n";

  this.findArtist = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(URL).then(function (response) {
      var jsonData = response.data;

      var artistData = [
        chalk.cyan("Venue: ")+ chalk.red(jsonData[0].venue.name),
        chalk.cyan("Location: ")+ chalk.red(jsonData[0].venue.country),
        chalk.cyan("City: ")+ chalk.red(jsonData[0].venue.city),
        chalk.cyan("Date: ") + chalk.red(jsonData[0].datetime),
      ].join("\n\n");
      fs.appendFile("log.txt", artistData + divider, function (err) {
        if (err) throw err;
        console.log(artistData);
      });

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
