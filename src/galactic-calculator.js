



export class Age {
  constructor(yearsOnEarth, lifeExpectancy) {
    this.yearsOnEarth = yearsOnEarth;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsOnMercury = 0.24;
    this.yearsOnVenus = 0.62;
    this.yearsOnMars = 1.88;
    this.yearsOnJupiter = 11.86;


  }

  mercuryAge() {
    return Math.round(this.yearsOnEarth / this.yearsOnMercury);
  }

  venusAge() {
    return Math.round(this.yearsOnEarth / this.yearsOnVenus)
  }
  
  marsAge() {
    return Math.round(this.yearsOnEarth / this.yearsOnMars);
  }

  jupiterAge() {
    return Math.round(this.yearsOnEarth / this.yearsOnJupiter);
  }

  earthLifeLeft() {
    return Math.round(this.lifeExpectancy - this.yearsOnEarth);
  }

  mercuryLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / this.yearsOnMercury);
  }

  venusLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / this.yearsOnVenus);
  }
  
  marsLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / this.yearsOnMars);
  }

  jupiterLifeLeft() {
    return Math.round((this.lifeExpectancy - this.yearsOnEarth) / this.yearsOnJupiter);
  }

  yearsOverAchieving() {
    if (this.yearsOnEarth > this.lifeExpectancy) {
      return this.yearsOnEarth - this.lifeExpectancy;
    }
  }
}