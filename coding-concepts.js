// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer:
// 10

// b) Verify and explain:
// Initial answer was correct // Counted every character and space in the var cohort variable string to end up with a length of 10 to print on the console // Started counting length at 1

// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer:
// l

// b) Verify and explain:
// Initial answer was correct // greeting[3] in console.log will print the character at index 3 of the string // started index count at 0


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer:
// Ruby

// b) Verify and explain:
// Initial answer was correct // console.log will print the value at index 1 in the var languages array // started index count at 0

// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer:
// SATURDAY
// SUNDAY

// b) Verify and explain:
// Initial answer was wrong // terminal returned an error message // toUpperCase function ran into a problem attempting to uppercase the array // javascript requires more info before it can perform this function in an array

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:
// number

// b) Verify and explain:
// Initial answer was correct // the typeof data printed by the .length function will be a type of number
