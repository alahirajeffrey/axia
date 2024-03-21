/**
 * arrays are special variables which can hold more than one value.
 * Lets say you wanted to store the names of the students in cohort five
 */

// without arrays
const firstStudent = "Richard";
const secondStudent = "Uko";
const thirdStudent = "Samuel";

/**
 * while technically, it still works but imagine there were over a 500 students.
 * you'd have to create 500 variables which is not very efficient.
 * The answer is an array
 */

// first method of initializing arrays
const firstMethod = Array();

// second method of initializing arrays
const secondMethod = [];

// lets initialize an empty array to save the names of all the students
const cohortFive = [];

// the push function adds an element to the end of the array
cohortFive.push("Richard");
console.log(cohortFive);

cohortFive.push("Uko");
console.log(cohortFive);

cohortFive.push("Samuel");
console.log(cohortFive);

cohortFive.push("Faith");
console.log(cohortFive);

cohortFive.push("Jeremiah");
console.log(cohortFive);

// the pop function removes an element from the end of the array
cohortFive.pop();
console.log(cohortFive);

cohortFive.pop();
console.log(cohortFive);

// get the length of array
console.log(cohortFive.length);

// inserts an element to the start of the array
cohortFive.unshift("Jeffrey");
console.log(cohortFive);

/**
 * There are various methods to loop through an array. Some of them include
 * 1. The for loop
 * 2. The for in loop
 * 3. The for each loop
 */

console.log("\nLooping using the for loop");
for (let i = 0; i < cohortFive.length; i++) {
  console.log(cohortFive[i]);
}

console.log("\nLooping using the for in loop");
for (const index in cohortFive) {
  console.log(cohortFive[index]);
}

console.log("\nLooping using the for each loop");
cohortFive.forEach((cohortFive) => {
  console.log(cohortFive);
});

/**
 * You can also search for elements in an array using some of the methods below
 * includes
 * indexOf
 */

// the includes method checks if the array includes a certain element and returns true if found, otherwise false.
const includesJeffrey = cohortFive.includes("Jeffrey");
//It should return true because the array includes Jeffrey
console.log(includesJeffrey);

const includesTaiwo = cohortFive.includes("Taiwo");
// It should return false because the array does not includes Taiwo"
console.log(includesTaiwo);
