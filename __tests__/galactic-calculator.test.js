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
    expect(age.mercuryLifeLeft()).toEqual(183);
  });
  test("Should correctly retun years of life left on Venus in Venus years", () => {
    expect(age.venusLifeLeft()).toEqual(71);
  });
  test("Should correctly retun years of life left on Mars in Mars years", () => {
    expect(age.marsLifeLeft()).toEqual(23);
  });
  test("Should correctly retun years of life left on Jupiter in Jupiter years", () => {
    expect(age.jupiterLifeLeft()).toEqual(4);
  });
  test("Should correctly return years past life expectancy if input age is greater than life expectancy",  () => {
    let overAchieverAge = new Age(150, 78);
    expect(overAchieverAge.yearsOverAchieving()).toEqual(72);
  });
  test("Should correctly return life expectancy based on life factors", () => {
    expect(affectOnExpectancy()).toEqual(46);
    function affectOnExpectancy() {
      let lifeFactors = 12
      let yearsOnEarth = 34
      yearsOnEarth += lifeFactors;
      return yearsOnEarth;
    } 
    
    
  })

});