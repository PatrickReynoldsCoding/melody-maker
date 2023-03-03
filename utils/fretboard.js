const { findString } = require("./strings");
const { stringsAndNotes } = require("./notes");

const printFretboard = (note) => {
  let fretboardTemplate = ["e ||", "B ||", "G ||", "D ||", "A ||", "E ||"];
  const fretboard = addNoteToFretboard(note, fretboardTemplate);
  for (let i = 0; i < fretboard.length; i++) {
    console.log(fretboard[i] + "\n");
  }
};

let beat = 1;

const addNoteToFretboard = (note, fretboard) => {
  const stringIndex = findString(note);
  let currentString = fretboard[stringIndex];
  let splitString = currentString.split("");
  // function to transcribe note to correct string position
  note = note - stringsAndNotes[stringIndex][0];
  stringIndex + splitString.splice(beat + 2, 0, `-${note.toString()}`);
  currentString = splitString.join("");
  fretboard[stringIndex] = currentString;
  return fretboard;
};

module.exports = {
  addNoteToFretboard,
  printFretboard,
};
