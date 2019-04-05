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

  this.findMovie = function (movie) {
    var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(function (response) {
      var jsonData = response.data;
      var movieData = [
        chalk.cyan("Movie: ") + chalk.red(jsonData.Title),
        chalk.cyan("Year of Released ") + chalk.red(jsonData.Released),
        chalk.cyan("Rating: ") + chalk.red(jsonData.Rated),
      ].join("\n\n");
      fs.appendFile("log.txt", movieData + divider, function (err) {
        if (err) throw err;
        console.log(movieData);
      });

    });
  };
};
  module.exports = Liri;
