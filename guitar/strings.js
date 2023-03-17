const { stringsAndNotes } = require("./notes");

// Function to decide and return the string the note will be added to
const findString = (note) => {
  // An array that will contain all the strings the note is found on
  const stringsWithNotePresent = [];
  for (const guitarString in stringsAndNotes) {
    if (stringsAndNotes[guitarString].includes(note)) {
      stringsWithNotePresent.push(guitarString);
    }
  }
  // return the highest string. This should help create build tabs around one position for ease of play
  return stringsWithNotePresent[0];
};

module.exports = {
  findString,
};
