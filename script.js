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

var dataMatch = () => {
  var scoreDolphin1 = 44;
  var scoreDolphin2 = 23;
  var scoreDolphin3 = 71;

  var scoreKoalas1 = 65;
  var scoreKoalas2 = 54;
  var scoreKoala3 = 49;
  calcAverage(
    scoreDolphin1,
    scoreDolphin2,
    scoreDolphin3,
    scoreKoalas1,
    scoreKoalas2,
    scoreKoala3
  );
  scoreDolphin1 = 85;
  scoreDolphin2 = 54;
  scoreDolphin3 = 41;
  scoreKoalas1 = 23;
  scoreKoalas2 = 34;
  scoreKoala3 = 27;
  calcAverage(
    scoreDolphin1,
    scoreDolphin2,
    scoreDolphin3,
    scoreKoalas1,
    scoreKoalas2,
    scoreKoala3
  );
};

var calcAverage = (
  scoreDolphin1,
  scoreDolphin2,
  scoreDolphin3,
  scoreKoalas1,
  scoreKoalas2,
  scoreKoala3
) => {
  var averageDolphin = (scoreDolphin1 + scoreDolphin2 + scoreDolphin3) / 3;
  var averageKoala = (scoreKoala3 + scoreKoalas1 + scoreKoalas2) / 3;
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

// dataMatch();

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

function tipCalculator(bill) {
  return (tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
}

function tipData() {
  var bills = [275, 40, 430];
  for (const bill of bills) {
    var tip = tipCalculator(bill);
    displayBill(bill, tip);
  }
}

function displayBill(bill, tip) {
  console.log(
    `The bill was ${bill}, tip is ${tip}, the total is ${bill + tip}`
  );
}

// tipData();

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

const mark = {
  weight: 78,
  height: 1.69,
  weight2: 95,
  height2: 1.95,
  calculateBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  weight: 92,
  height: 1.95,
  weight2: 85,
  height2: 1.76,
  calculateBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
// mark.calculateBMI();
// john.calculateBMI();
// if (mark.bmi > john.bmi) {
//   console.log(`BMI of mark ${mark.bmi}is greater than johns ${john.bmi}`);
// } else {
//   console.log(`BMI of john ${john.bmi}is greater than mark ${mark.bmi}`);
// }

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1.
// First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2.
// To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3.
// Call the function with the 'totals' array
// GOOD LUCK 😀

function tipCalculator2(bill) {
  return (tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
}

function tipData2() {
  var bills = [275, 40, 430];
  var tips = [];
  var total = [];
  for (const bill of bills) {
    var tip = tipCalculator2(bill);
    tips.push(tip);
    total.push(tip + bill);
    displayBill2(bill, tip);
  }
  displayTotal(total);
}

function displayBill2(bill, tip) {
  console.log(
    `The bill was ${bill}, tip is ${tip}, the total is ${bill + tip}`
  );
}

function displayTotal(total) {
  var sum = 0;
  for (iterator of total) {
    sum = sum + iterator;
  }
  console.log(sum);
  var average = sum / total.length;
  console.log(average);
}

tipData2();
