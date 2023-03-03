let beat = 1;

let fretboard = ["e ||", "B ||", "G ||", "D ||", "A ||", "E ||"];

const stringsAndNotes = {
  0: [
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48,
  ],
  1: [
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43,
  ],
  2: [
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39,
  ],
  3: [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34,
  ],
  4: [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29,
  ],
  5: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ],
};

// Function to decide and return the string the note will be added to
const findString = (note) => {
  const properties = [];

  for (const string in stringsAndNotes) {
    if (stringsAndNotes[string].includes(note)) {
      properties.push(string);
    }
  }

  return properties;
};

console.log(findString(10));

// // Function to return note position whilst skipping the starting 4 characters
// const placement = (beat) => {
// return beat + 3
// }

// Function to print fretboard to console
const printFretboard = (fretboard) => {
  for (let i = 0; i < fretboard.length; i++) {
    console.log(fretboard[i] + "\n");
  }
};

// Function to add note to fretboard
const addFretToString = (note) => {
  // Get string index
  const stringIndex = findString(note);

  // Get the chosen string from the fretboard array
  let currentString = fretboard[stringIndex];

  // Split the string into an array of characters
  let stringArray = currentString.split("");

  // Replace the space between the pipes with the fret number
  stringArray.splice(beat + 2, 0, `-${note.toString()}`);

  // Join the characters back into a string
  currentString = stringArray.join("");

  // Replace the old string in the fretboard array with the modified string
  fretboard[stringIndex] = currentString;

  // Return the modified fretboard array
  printFretboard(fretboard);
};

addFretToString(0);
