// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// If the temperature entered by the user is below boiling point then a message that the temperature value "is below boiling point" will be delivered.
// If the temperature entered by the user is above boiling point then a message that the temperature value "is above boiling point" will be delivered.
// If the temperature entered by the user is equal to boiling point then a message that the temperature value "is equal to boiling point" will be delivered.
// Boiling point is 212 F

// Declare the variable to be temperature equal to 212.
var temp = 212

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Declare temp the variable is equal to 35
// Declare boilingPt the variable is equal to 212
// If temp 35 is less than boilingPt 212
   // Print "35 is below boiling point"
// Else if temp 35 is greater than boilingPt 212
   // Print "35 is above boiling point"
// Else temp 35 is equal to boilingPt 212
  // Print "35 is at boiling point"

var temp = 35
var boilingPt = 212
if (temp < boilingPt) {
  console.log (`${temp} is below boiling point`)
} else if (temp > boilingPt) {
  console.log (`${temp} is above boiling point`)
} else if (temp = boilingPt) {
  console.log (`${temp} is at boiling point`)
}


// Declare temp the variable is equal to 350
// Take boilingPt variable previousy declared
// If temp 350 is less than boilingPt 212
   // print "350 is below boiling point"
// Else if temp 35 is greater than boilingPt 212
   // Print "350 is above boiling point"
// Else temp 350 is equal to boilingPt 212
  // Print "350 is at boiling point"

var temp = 350
var boilingPt = 212
if (temp < boilingPt) {
  console.log (`${temp} is below boiling point`)
} else if (temp > boilingPt) {
  console.log (`${temp} is above boiling point`)
} else if (temp = boilingPt) {
  console.log (`${temp} is at boiling point`)
}

// Declare temp the variable is equal to 212
// Take boilingPt variable previousy declared
// If temp 212 is less than boilingPt 212
   // print "212 is below boiling point"
// Else if temp 212 is greater than boilingPt 212
   // print "212 is above boiling point"
// Else temp 212 is equal to boilingPt 212
  // Print "212 is at boiling point"

var temp = 212
var boilingPt = 212
if (temp < boilingPt) {
  console.log (`${temp} is below boiling point`)
} else if (temp > boilingPt) {
  console.log (`${temp} is above boiling point`)
} else if (temp = boilingPt) {
  console.log (`${temp} is at boiling point`)
}


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

// Declare first variable myNumbers1 is equal to an array of numbers
// Declare second variable myNumbers2 is equal to an array numbers
  // Print the length of the two combined arrays

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
console.log((myNumbers1.concat(myNumbers2)).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

// Declare myString1 as the variable is equal to "charlie"
// Declare splitMyString1 as the variable is equal to split function of myString1
// Declare reverseMyString1 as the variable is equal to reverse function of splitMyString1
  // Print join function of reverseMyString1

var myString1 = "charlie"
var splitMyString1 = myString1.split("")
var reverseMyString1 = splitMyString1.reverse()
console.log(reverseMyString1.join(""))

// Declare myString1 as the variable is equal to "delta"
// Declare splitMyString1 as the variable is equal to split function of myString1
// Declare reverseMyString1 as the variable is equal to reverse function of splitMyString1
  // Print join function of reverseMyString1

var myString2 = "delta"
var splitMyString2 = myString2.split("")
var reverseMyString2 = splitMyString2.reverse()
console.log(reverseMyString2.join(""))


// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// If the first number entered by the user is greater than the second number entered by the user then a message with the value of, number 1 subtracted from number 2, will be delivered
// If the second number entered by the user is greater than the first number entered by the user then a message with the value of, number 2 subtracted from number 1, will be delivered


// Declare number1 as the variable is equal to the number value 42
// Declare number2 as the variable is equal to number value 27
  // If number1 is greater than number2
    // Print value of number1 minus number2
// Else print value of number2 minus number1

var number1 = 42
var number2 = 27
if (number1 > number2) {
  console.log(number1 - number2)
} else {
  console.log(number2 - number1)
}

// Take two variable declared previously
// Declare number1 equal to number value 7
// Declare number2 equal to number value 19
  // If number1 is greater than number2
    // Print value of number1 minus number2
// Else print value of number2 minus number1

var number1 = 7
var number2 = 19
if (number1 > number2) {
  console.log(number1 - number2)
} else {
  console.log(number2 - number1)
}


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

// Declare variable numberRefactor1 equal to number value 42
// Declare variable numberRefactor2 equal to the string hello
  // If numberRefactor1 is not a number or numberRefactor2 is not a number
    // Print "your input is not a number"
// Else if numberRefactor1 is greater than numberRefactor2
   // Print value of numberRefactor1 minus numberRefactor2
// Else print value of numberRefactor2 minus numberRefactor1

var numberRefactor1 = 42
var numberRefactor2 = "hello"
if (isNaN (numberRefactor1) || isNaN (numberRefactor2)) {
  console.log ("Your input is not a number")
} else if (numberRefactor1 > numberRefactor2) {
  console.log(numberRefactor1 - numberRefactor2)
} else {
  console.log(numberRefactor2 - numberRefactor1)
}

// Declare variable numberRefactor1 equal to number value 27
// Declare variable numberRefactor2 equal to number value 24
  // If numberRefactor1 is not a number or numberRefactor2 is not a number
    // Print "your input is not a number"
// Else if numberRefactor1 is greater than numberRefactor2
   // Print value of numberRefactor1 minus numberRefactor2
// Else print value of numberRefactor2 minus numberRefactor1

var numberRefactor1 = 27
var numberRefactor2 = 24
if (isNaN (numberRefactor1) || isNaN (numberRefactor2)) {
  console.log ("Your input is not a number")
} else if (numberRefactor1 > number2) {
  console.log(numberRefactor1 - numberRefactor2)
} else {
  console.log(numberRefactor2 - numberRefactor1)
}
