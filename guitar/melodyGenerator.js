const sample = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const melodyGenerator = (scale, options) => {
  const melody = [];
  while (melody.length < options.length) {
    const randomNote = sample(scale);
    melody.push(randomNote);
  }
  return melody;
};

// melodyGenerator(major, { length: 32 })
module.exports = { melodyGenerator };
