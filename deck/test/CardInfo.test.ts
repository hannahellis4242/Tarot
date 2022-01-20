import CardInfo from "../src/CardInfo";

const info = new CardInfo();

describe("index 0 to 21 inclusive has no suit", () => {
  Array.from({ length: 22 }, (_, key) => key).forEach((value) => {
    it("should return null for suit(" + value + ")", () => {
      expect(info.suit(value)).toBe(null);
    });
  });
});

describe("index 22 to 35 inclusive has suit wands", () => {
  Array.from({ length: 14 }, (_, key) => key + 22).forEach((value) => {
    it("should return Wands for suit(" + value + ")", () => {
      expect(info.suit(value)).toBe("Wands");
    });
  });
});

describe("index 36 to 49 inclusive has suit cups", () => {
  Array.from({ length: 14 }, (_, key) => key + 36).forEach((value) => {
    it("should return Cups for suit(" + value + ")", () => {
      expect(info.suit(value)).toBe("Cups");
    });
  });
});

describe("index 50 to 63 inclusive has suit swords", () => {
  Array.from({ length: 14 }, (_, key) => key + 50).forEach((value) => {
    it("should return Swords for suit(" + value + ")", () => {
      expect(info.suit(value)).toBe("Swords");
    });
  });
});

describe("index 64 to 77 inclusive has suit pentacles", () => {
  Array.from({ length: 14 }, (_, key) => key + 64).forEach((value) => {
    it("should return Pentacles for suit(" + value + ")", () => {
      expect(info.suit(value)).toBe("Pentacles");
    });
  });
});

describe("negative numbers have no suit", () =>
  it("should return null for suit(-1)", () =>
    expect(info.suit(-1)).toBe(null)));

describe("numbers over 77 have no suit", () =>
  it("should return null for suit(78)", () =>
    expect(info.suit(78)).toBe(null)));

describe("non integer numbers have no suit", () =>
  it("should return null for suit(36.1)", () =>
    expect(info.suit(36.1)).toBe(null)));

describe("non integer numbers have no pip", () =>
  it("should return null for pip(45.2)", () =>
    expect(info.pip(45.2)).toBe(null)));

describe('index 0 has pip value of "0 The Fool"', () =>
  expect(info.pip(0)).toBe("0 The Fool"));
