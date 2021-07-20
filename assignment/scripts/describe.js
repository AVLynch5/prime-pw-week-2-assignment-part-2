// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A variable called 'name' is made and set equal to the string 'Dane'.
// We check to see if name is strictly equal to 'Mary'.
// 'Dane' is not equal to 'Mary' so we console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// A variable 'secret' is declared with no value. A variable 'code' is set equal to the number 123.
// We check to see if 'code' is stricly equal to the number 123. It is, so 'secret' is set equal to the string 'super'
// and 'code' is set equal to 123*2 = 246. We then check if 'code' is greater than 250. 246 < 250, so 'secret'
// does not change. Therefore, console.log(secret) should returns the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 3 variables are declared. 'isStudent' equals the boolean 'true', 'age' equals the number 34, and
// 'zip' equals the number 55407. The first conditional statement is false because 55407<80000. The second
// conditional statement is false because neither condition is true. 'isStudent' is true, so the 3rd conditional
// statement is true. We therefore expect console.log to return the string 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// Fix - In this section, 'colorOne' is set to 'red' and 'colorTwo' is set to 'blue'. According to the
// code description, these values are switched.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// Fix - According to the code description, if 'mix' is true then both 'colorOne' and 'colorTwo' should
// be set to 'purple'. However, only 'colorOne' is set to 'purple' in the code below.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// Fix - In the code description above, both 'temp' and 'time' should be variables. In the code below,
// 'temp' is a variable but 'time' is a constant. Variables are declared using 'let'.
let temp = 40;
const time = 4;

// Fix - In the code description above, 'and' is used s/t both parts of the conditional statement need
// to be true in order to return the console.log message. In the code below, || ('or') was used, meaning
// only one of the conditions has to be true for the console.log message to display. '||' must be changed to '&&'.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
// Fix - In the code above, both 'age' and 'minAge' should be variables. In the code below, "minAge" is declared
// as a constant. This code will not be popular in Europe.
let age = 21;
const minAge = 21;

// Fix - This check is intended to see if 'age' is >= 'minAge' to determine if somebody can enter.
// If 'age' >= 'minAge', entry should be permitted.
// In this code below, the exact opposite happens. When 'age' is >= 'minAge', console.log displays 'no entry'.
// The easiest fix is to change '<=' to '>'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
