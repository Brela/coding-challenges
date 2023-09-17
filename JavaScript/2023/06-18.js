// 7 kyu - find the capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the
// indexes of all capital letters in the string.

var capitals = function (word) {
  let listOfIndexes = [];
  // iterate though the word to check for uppercase letters
  word.split("").forEach((el, i) => {
    if (el.toUpperCase() === el) listOfIndexes.push(i);
  });
  return listOfIndexes; // of caps, ordered
};

// console.log(capitals("CodEWaRs")); // [0,3,4,6]
