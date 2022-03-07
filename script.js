// DecisionMakingExercise

// 1a
let randomNum = Math.floor(Math.random()*5)+1;
console.log(randomNum);

// 1b
/*
if (randomNum >= 4 ) {
    console.log(`Greater than or equal to 4`);
  } else if (randomNum >= 2) {
    console.log(`Equal to 2 or 3`);
  } else {
    console.log(`Equal to 1`);
  }
  */

  if (randomNum >= 4 ) {
    console.log(`Greater than or equal to 4`);
  } else if (randomNum === 3 || randomNum === 2) {
    console.log(`Equal to 2 or 3`);
  } else {
    console.log(`Equal to 1`);
  }

// 1c 
if (randomNum !== 3) {
   console.log(`Not equal to 3`);
  }

// 1d
if (randomNum !== 3 && randomNum !== 5) {
    console.log(`NOT equal to 3 AND not equal to 5`);
}

// OR
/*
if (randomNum !== 3 && 5) {
    console.log(`NOT equal to 3 AND not equal to 5`);
}
*/

// 1e
/*
if (randomNum === 2) {
    console.log(`Equal to 2 OR equal to 4`);
} else if (randomNum === 4) {
    console.log(`Equal to 2 OR equal to 4`);
} 
*/

if (randomNum === 2 || randomNum === 4) {
    console.log(`Equal to 2 OR equal to 4`);
}

// BONUS
// 2

/*
if (randomNum >= 4) {
    console.log(`Greater than or equal to 4`);
} else {
    console.log(`Less than 4`);
}
*/

randomNum = (randomNum >= 4) ? `Greater than or equal to 4` : `Less than 4`;
console.log(randomNum);

// OR

randomNum >= 4 ? console.log(`Greater than or equal to 4`) : console.log(`Less than 4`);


// 3
// Switch Statement takes a parameter/argument and returns something based on the CASE (Or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will diaplay "One" in the terminal, if randomNum is 2 it will display "Two", etc.
switch(randomNum) {
    case 1:
        console.log("One");
        // Break keywords are needed between each case so that the code for the case that follows does NOT also run
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
    // There is no need for a BREAK at the end of a switch statement since there are no other cases.
}


