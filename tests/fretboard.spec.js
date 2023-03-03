const { addNoteToFretboard } = require("../utils/fretboard");
describe("the addFretToString function adds notes and returns a fretboard", () => {
  beforeEach(() => {
    // Reset the fretboard array before each test
    fretboard = ["e ||", "B ||", "G ||", "D ||", "A ||", "E ||"];
  });
  it("takes the note 0", () => {
    const result = addNoteToFretboard(0, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G ||", "D ||", "A ||", "E |-0|"]);
  });

  it("takes the note 4", () => {
    const result = addNoteToFretboard(4, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G ||", "D ||", "A ||", "E |-4|"]);
  });
  it("takes the note 5", () => {
    const result = addNoteToFretboard(5, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G ||", "D ||", "A |-0|", "E ||"]);
  });
  it("takes the note 6", () => {
    const result = addNoteToFretboard(6, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G ||", "D ||", "A |-1|", "E ||"]);
  });
  it("takes the note 10", () => {
    const result = addNoteToFretboard(10, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G ||", "D |-0|", "A ||", "E ||"]);
  });
  it("takes the note 15", () => {
    const result = addNoteToFretboard(15, fretboard);
    expect(result).toEqual(["e ||", "B ||", "G |-0|", "D ||", "A ||", "E ||"]);
  });
  it("takes the note 19", () => {
    const result = addNoteToFretboard(19, fretboard);
    expect(result).toEqual(["e ||", "B |-0|", "G ||", "D ||", "A ||", "E ||"]);
  });
  it("takes the note 24", () => {
    const result = addNoteToFretboard(24, fretboard);
    expect(result).toEqual(["e |-0|", "B ||", "G ||", "D ||", "A ||", "E ||"]);
  });
});
