const yearsOnMercury = 0.24;
const yearsOnVenus = 0.62;
const yearsOnMars = 1.88;
const yearsOnJupiter = 11.86;

export class Age {
  constructor(yearsOnEarth, lifeExpectancy) {
    this.yearsOnEarth = yearsOnEarth;
    this.lifeExpectancy = lifeExpectancy;
  };

  mercuryAge() {
    return Math.round(this.yearsOnEarth / yearsOnMercury);
  };

  venusAge() {
    return Math.round(this.yearsOnEarth / yearsOnVenus);
  };
  
  marsAge() {
    return Math.round(this.yearsOnEarth / yearsOnMars);
  };

  jupiterAge() {
    return Math.round(this.yearsOnEarth / yearsOnJupiter);
  };
};











// A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

// You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a TDD spec before writing the corresponding method; in this way, you'll be following a Red, Green, Refactor workflow. Remember to include at least one test for each spec and that, typically, we'll only want one expectation per test.

// The business logic of your application should:

// Take a person's age in years and create a class that does the following:

// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.