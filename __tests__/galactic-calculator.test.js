import { Age } from "./../src/galactic-calculator.js"

describe ("Age", () => {

  let age = new Age(34, 78);
  
  test("Should correctly create Age class with age in Earth years", () => {
    expect(age.yearsOnEarth).toEqual(34);
  });
  test("Should correctly retun age in Mercury years from input of age in Earth years", () => {
    expect(age.mercuryAge()).toEqual(142);
  });
  test("Should correctly retun age in Venus years from input of age in Earth years", () => {
    expect(age.venusAge()).toEqual(55);
  });
  test("Should correctly retun age in Venus years from input of age in Earth years", () => {
    expect(age.marsAge()).toEqual(18);
  });
  test("Should correctly retun age in Jupiter years from input of age in Earth years", () => {
    expect(age.jupiterAge()).toEqual(3);
  });
  test("Should correctly create Age class with life expectancy in Earth years", () => {
    expect(age.lifeExpectancy).toEqual(78);
  });
  test("Should correctly retun years of life left on Earth by subtracting age in Earth years from life expectancy", () => {
    expect(age.earthLifeLeft()).toEqual(44);
  });
  test("Should correctly retun years of life left on Mercury in Mercury years", () => {
    expect(age.mercuryLifeLeft()).toEqual();
  });

});