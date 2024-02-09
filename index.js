const { printFretboard } = require("./print/fretboard");
const { melodies } = require("./data/melodies");

printFretboard(melodies[melodies.length - 1]);
