// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// §
// §
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// §To calculate average of 3 values, add them all together and divide by 3
// §To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
var calcAverage = () => {
  var scoreDolphin1 = 44;
  var scoreDolphin2 = 23;
  var scoreDolphin3 = 71;

  var scoreKoalas1 = 65;
  var scoreKoalas2 = 54;
  var scoreKoala3 = 49;

  var averageDolphin = (scoreDolphin1 + scoreDolphin2 + scoreDolphin3) / 3;
  var averageKoala = (scoreKoala3 + scoreKoalas1 + scoreKoalas2) / 3;
  console.log(averageDolphin, averageKoala);
  checkWinner(averageDolphin, averageKoala);

  scoreDolphin1 = 85;
  scoreDolphin2 = 54;
  scoreDolphin3 = 41;
  scoreKoalas1 = 23;
  scoreKoalas2 = 34;
  scoreKoala3 = 27;
  averageDolphin = (scoreDolphin1 + scoreDolphin2 + scoreDolphin3) / 3;
  averageKoala = (scoreKoala3 + scoreKoalas1 + scoreKoalas2) / 3;
  console.log(averageDolphin, averageKoala);
  checkWinner(averageDolphin, averageKoala);
};

var checkWinner = (averageDolphin, averageKoala) => {
  if (averageDolphin >= 2 * averageKoala) {
    console.log(`Dolphin wins ${averageDolphin} vs ${averageKoala}`);
  } else if (averageKoala >= 2 * averageDolphin) {
    console.log(`Koala wins ${averageDolphin} vs ${averageKoala}`);
  } else {
    console.log(
      `Dolphin(${averageDolphin}) vs Koala(${averageKoala}) , nobody Wins`
    );
  }
};

calcAverage();
