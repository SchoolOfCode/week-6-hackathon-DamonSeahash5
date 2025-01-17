import { test, expect, describe } from "vitest";
import { whoAteAllThePies } from "./main.js";

test("example scenario which should pass with valid inputs", () => {
  const outcome = whoAteAllThePies(10, 2);
  const expected = [5, false];
  expect(outcome).toStrictEqual(expected);
});

describe("tests should pass if inputs are valid", () => {
  //Assign
  //Define the set of valid inputs for the test
  //[bootcampers, slices, pies, canChrisFaisalNadeemComeToo]
  const validArray = [
    [10, 2, 5, false],
    [50, 6, 9, true],
  ];
  test.each(validArray)(
    "Testing valid values",
    (bootcampers, slices, pies, canChrisFaisalNadeemComeToo) => {
      //ACT
      const outcome = whoAteAllThePies(bootcampers, slices);
      const expected = [pies, canChrisFaisalNadeemComeToo];
      //ASSERT
      expect(outcome).toStrictEqual(expected);
    }
  );
});

describe("should throw error if invalid input or inputs", () => {
  //[bootcampers, slices]
  const invalidArray = [
    [10, 1],
    [51, 5],
  ];

  test.each(invalidArray)("testing invalid values", (bootcampers, slices) => {
    expect(() => whoAteAllThePies(bootcampers, slices)).toThrowError();
  });
});
