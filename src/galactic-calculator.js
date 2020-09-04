
const yearsOnMercury = 0.24;
const yearsOnVenus = 0.62;
const yearsOnMars = 1.88;
const yearsOnJupiter = 11.86;


export class Age {
  constructor(yearsOnEarth, lifeExpectancy) {
    this.yearsOnEarth = yearsOnEarth;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge() {
    return Math.round(this.yearsOnEarth / yearsOnMercury);
  }

  venusAge() {
    return Math.round(this.yearsOnEarth / yearsOnVenus);
  }
  
  marsAge() {
    return Math.round(this.yearsOnEarth / yearsOnMars);
  }

  jupiterAge() {
    return Math.round(this.yearsOnEarth / yearsOnJupiter);
  }

  earthLifeLeft() {
    return Math.round(this.lifeExpectancy - this.yearsOnEarth);
  }

  mercuryLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / yearsOnMercury);
  }

  venusLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / yearsOnVenus);
  }
  
  marsLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / yearsOnMars);
  }

  jupiterLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / yearsOnJupiter);
  }

  yearsOverAchieving() {
    if (this.yearsOnEarth > this.lifeExpectancy) {
      return this.yearsOnEarth - this.lifeExpectancy;
    }
  }

  affectOnExpectancy() {
    let lifeFactors;
    this.lifeExpectancy = 78;
    this.lifeExpectancy += lifeFactors;
    return this.lifeExpectancy;
  }
}