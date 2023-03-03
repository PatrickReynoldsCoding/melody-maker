const { findString } = require("./strings");

const fretboard = ["e ||", "B ||", "G ||", "D ||", "A ||", "E ||"];

const printFretboard = () => {
  for (let i = 0; i < fretboard.length; i++) {
    console.log(fretboard[i] + "\n");
  }
};

const addFretToString = (note) => {
  const stringIndex = findString(note);
  let currentString = fretboard[stringIndex];
  let stringArray = currentString.split("");
  stringArray.splice(beat + 2, 0, `-${note.toString()}`);
  currentString = stringArray.join("");
  fretboard[stringIndex] = currentString;
  printFretboard();
};

module.exports = {
  addFretToString,
};
