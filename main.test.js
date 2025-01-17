import { test, expect, describe } from "vitest";
import { whoAteAllThePies } from "./main.js";

describe("tests should pass if inputs are valid", () => {
  const validArray = [
    [10, 2, 5, false],
    [10, 6, 2, false],
    [50, 2, 25, false],
    [50, 6, 9, true],
    [10, 2.0, 5, false],
  ];
  test.each(validArray)(
    "Testing valid values %i, %i",
    (bootcampers, slices, pies, canChrisFaisalNadeemComeToo) => {
      const outcome = whoAteAllThePies(bootcampers, slices);
      const expected = [pies, canChrisFaisalNadeemComeToo];

      expect(outcome).toStrictEqual(expected);
    }
  );
});

describe("should throw error if invalid input or inputs", () => {
  const invalidArray = [
    [9, 1],
    [9, 2],
    [10, 1],
    [9, 6],
    [9, 7],
    [10, 7],
    [50, 1],
    [51, 1],
    [51, 2],
    [50, 7],
    [51, 6],
    [51, 7],
    // ["10", 2],
    // [10, "ten"],
    // [10.2, 2],
  ];
  test.each(invalidArray)(
    "Testing invalid values %i %i",
    (bootcampers, slices) => {
      expect(() => whoAteAllThePies(bootcampers, slices)).toThrowError();
    }
  );
});
