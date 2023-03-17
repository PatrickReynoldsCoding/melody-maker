const { printFretboard } = require("./guitar/fretboard");
const { melodies } = require("./data/melodies");
const { melodyGenerator } = require("./guitar/melodyGenerator");
const { major } = require("./data/scales");

const options = {
  length: 32,
};

printFretboard(melodyGenerator(major, options));
