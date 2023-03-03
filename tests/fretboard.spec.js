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
});
