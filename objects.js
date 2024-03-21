/**
 * an object is a collection of key-value pairs,
 * where each key is a string (or symbol) and each
 * value can be any data type
 */

// first method to initialize an empty object
const firstObject = {};

// second method to initialize and empty object
const secondObject = Object();

/**
 * an example of an object
 * name and gender are the object keys
 * while jeffrey and male are the values of the keys
 */
const thirdObject = {
  name: "Jeffrey",
  gender: "male",
};

// you can use the Object.keys() function to get the keys of an object
console.log(Object.keys(thirdObject));

// you can use the Object.values() function to get the values of the keys of an object
console.log(Object.values(thirdObject));

// you can also create an array of objects
const students = [
  {
    name: "uko",
    gender: "female",
    favoriteWord: "okay",
  },
  {
    name: "Samuel",
    gender: "male",
    favoriteWord: "alright",
  },
  {
    name: "Richard",
    gender: "male",
    favoriteWord: "clear",
  },
];

// get the 3rd object in the student array
console.log("Third student object : ", students[2]);

// loop through the sudent array and print the names of all the students
for (const index in students) {
  console.log("Student name: " + students[index].name);
}
