// Randomly select one element from an array
const sample = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const last = (array) => {
  return array[array.length - 1];
};

const randomNotes = (scale, _melody, _options) => {
  // TODO - Instead of using full scale, use a subset around the last played note.
  //      - Randomise length of random notes
  const notes = [];
  while (notes.length < 4) {
    const randomNote = sample(scale);
    notes.push(randomNote);
  }
  return notes;
};

// melodyGenerator(major, { length: 32 })

const melodyGenerator = (scale, options) => {
  const extendedScale = extend(scale);
  const fns = [
    createRun,
    randomNotes,
    // resolve,
    // useMotif,
  ];
  const melody = [];
  while (melody.length < options.length) {
    const randomFn = sample(fns);
    const newNotes = randomFn(extendedScale, melody, options);
    melody.push(...newNotes);
  }
  return melody;
};

const extend = (scale) => {
  const oneOctaveUp = scale.map((n) => n + 12);
  const twoOctavesUp = scale.map((n) => n + 24);
  return [...scale, ...oneOctaveUp, ...twoOctavesUp];
};

const createRun = (scale, melody, options) => {
  // TODO - Randomise length of run
  //      - Randomise direction of run
  // const startNote = last(melody) ?? sample(scale);
  const startNote = last(melody) ?? 0;
  // const direction = Math.random() > 0.5 ? "up" : "down";
  const run = createShortRun(scale, "up", startNote, 4);
  return run;
};

const createShortRun = (scale, direction, startNote, length) => {
  const notes = [];
  let index = scale.indexOf(startNote);
  while (notes.length < length) {
    // TODO - Make sure we don't breach the bounds of the scale when creating runs.
    //        Bounce? Change direction if we do?
    if (direction === "up") {
      index += 1;
    } else {
      index -= 1;
    }
    notes.push(scale[index]);
  }
  return notes;
};

module.exports = { melodyGenerator };
