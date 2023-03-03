const { findString } = require("./strings");
const { stringsAndNotes } = require("./notes");

const printFretboard = (note) => {
  let beat = 1;
  let fretboardTemplate = ["e |", "B |", "G |", "D |", "A |", "E |"];
  const fretboard = addNoteToFretboard(note, fretboardTemplate, beat);
  for (let i = 0; i < fretboard.length; i++) {
    console.log(fretboard[i] + "\n");
  }
};

const addAllNotesToFretboard = (notes) => {
  let beat = 1;
  let fretboardTemplate = ["e |", "B |", "G |", "D |", "A |", "E |"];
  return fretboard;
};

// --NOTES FOR NEXT TIME:
// Make the printFretboard function a loop that itirates over an array of notes.
// On the 8th loop run a line that fills in any spaces and caps off each bar with a "|"
// Remember to use the beat variable to plot where the note is going.

//  --Rough Plan:
// for (let i = 0; i < notes.length; i++) {
//   // loop through array

//   if ((i + 1) % 8 === 0) {
//     // check if index is a multiple of 8
//     // run extra line of code here
//   }
// }

const addNoteToFretboard = (note, fretboard, beat) => {
  const stringIndex = findString(note);
  // Get the correct guitar string based off the note and return a split copy
  let currentString = fretboard[stringIndex];
  let splitString = currentString.split("");
  // Transcribe the note depending on the string
  let noteToAdd = note - stringsAndNotes[stringIndex][0];
  // Add note to our guitar string copy and convert back to string
  let position = beat + 2;
  splitString.splice(position, 0, `-${noteToAdd.toString()}`);
  currentString = splitString.join("");
  // Add "--" to the other 5 elements(strings) except for the modified string
  for (let i = 0; i < fretboard.length; i++) {
    if (i !== stringIndex) {
      let otherString = fretboard[i];
      let otherSplitString = otherString.split("");
      let space = noteToAdd >= 10 ? "---" : "--";
      otherSplitString.splice(position, 0, space);
      otherString = otherSplitString.join("");
      fretboard[i] = otherString;
    }
  }
  // Add new guitar string to our fretboard
  fretboard[stringIndex] = currentString;

  return fretboard;
};

module.exports = {
  addNoteToFretboard,
  addAllNotesToFretboard,
  printFretboard,
};
