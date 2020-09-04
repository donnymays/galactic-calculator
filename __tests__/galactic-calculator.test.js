import { Age } from "./../src/galactic-calculator.js"

describe ("Age", () => {

  let age = new Age(34, 78);
  
  test("Should correctly create Age class with age in Earth years", () => {
    expect(age.yearsOnEarth).toEqual();
  });
});