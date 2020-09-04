import { Age } from "./../src/galactic-calculator.js"

describe ("Age", () => {

  let age = new Age(34, 78);
  
  test("Should correctly create Age class with age in Earth years", () => {
    expect(age.yearsOnEarth).toEqual(34);
  });
  test("Should correctly retun age in Mercury years from input of age in Earth years", () => {
    expect(age.mercuryAge()).toEqual();
  })
});