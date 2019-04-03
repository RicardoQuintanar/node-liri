var Liri = require("./liri")

var liri = new Liri();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search) {
  search = "concert-this";
}

if (!term) {
  term = "Drake ";
}

if (search === "concert-this") {
  console.log("Searching for artist");
  liri.findArtist(term);
}
// else if(search === "movie-this") {
//   console.log("searching for Movie");
//   liri.findMovie(term);
// }
// else if(search === "spotify-this") {

// }


