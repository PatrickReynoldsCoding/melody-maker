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

// --NOTES FOR NEXT TIME:
// Make the printFretboard function a loop that itirates over an array of notes.
// On the 8th loop run a line that fills in any spaces and caps off each bar with a "|"
// Remember to use the beat variable to plot where the note is going.
// Also, edit code as a "--" is needed on each string that isn't being given a note.
//"---" if the note is double digits.

const addNoteToFretboard = (note, fretboard) => {
  const stringIndex = findString(note);
  // Get the correct guitar string based off the note and return a split copy
  let currentString = fretboard[stringIndex];
  let splitString = currentString.split("");
  // Transcribe the note depending on the string
  let noteToAdd = note - stringsAndNotes[stringIndex][0];
  // Add note to our guitar string copy and convert back to string
  splitString.splice(beat + 2, 0, `-${noteToAdd.toString()}`);
  currentString = splitString.join("");
  // Add new guitar string to our fretboard
  fretboard[stringIndex] = currentString;
  return fretboard;
};

module.exports = {
  addNoteToFretboard,
  printFretboard,
};
