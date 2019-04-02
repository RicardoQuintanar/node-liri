var Liri = require("./liri")

var liri = new Liri();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
// for (var i = 4; i < process.argv.length; i++) {
//     term += (" " + process.argv[i]);
// }

if (!search) {
  search = "artist";
}

if (!term) {
  term = "Aerosmith";
}

if (search === "concert-this") {
  console.log("Searching for artist");
  liri.findArtist(term)}

  // if (search === "movie-this") {
  //   console.log("Searching for movie");
  //   liri.findMovie(term)}