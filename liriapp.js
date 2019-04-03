var Liri = require("./liri")

var liri = new Liri();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search) {
  search = "concert-this";
}

if (!term) {
  term = "drake";
}

if (search === "concert-this") {
  console.log("Searching for artist");
  liri.findArtist(term)}

  // if (search === "movie-this") {
  //   console.log("Searching for movie");
  //   liri.findMovie(term)}